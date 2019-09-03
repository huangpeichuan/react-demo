import React from 'react';
import './index.css';

/*class Square extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     value:null,
  //   }
  // }

  render() {
    return (
      <button className="square" onClick={ ()=> this.props.onClick() }>
        {this.props.value}
      </button>
    );
  }
}*/
function Square(props) {
  return (
    <button className="square" onClick= { props.onClick }>
      {props.value}
    </button> 
  )
}

class Board extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     square:Array(9).fill(null),
  //     xIsNext:true,
  //   }
  // }


  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={ () => this.props.onClick(i) } />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        square:Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext:true,
    }
  }

  //每一步记录到Game组件的history中,并判断游戏结果
  handleClick(i) {
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.square.slice();

    if(calculateWinner(squares) || squares[i]) {//当有玩家胜出时，或者某个 Square 已经被填充时，该函数不做任何处理直接返回。
      return;
    }

    squares[i] = this.state.xIsNext ? 'X':'O';//棋子每移动一步，xIsNext（布尔值）都会反转，该值将确定下一步轮到哪个玩家
    this.setState({
      history: history.concat([{
        square :squares,
      }]),
      stepNumber: history.length,
      xIsNext:!this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({ 
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.square);

    //遍历history
    const moves = history.map((step,move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={ () => this.jumpTo(move) } >{desc}</button>
        </li>
      );
    });

    let status;
    if(winner) {
      status = 'Winner：' + winner;
    } else {
      status = 'Next player：' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.square}
            onClick={ (i)=>this.handleClick(i) }
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}


//判断井字游戏结果
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
