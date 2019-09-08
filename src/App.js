import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Game from './Game';
import LoginContrl from './LoginControl';
import AppLi from './Li-Index';
import NameForm from './FormDemo';
import List from './List';
import {EssayForm,FlavorForm} from './EssayForm ';
import CalculatorTemperature from './CalculatorTemperature';
import Component from './Comment';

//包含其他组件
function App() {
  return (
    <div>
      <div id="top"></div>
      <Div name="kugou"/>
      <div className="line"></div>
      <Clock />
      <div className="line"></div>
      切换按钮
      <Toggle />
      <div className="line"></div>
      井字游戏
      <Game />
      <div className="line"></div>
      <LoginContrl />
      <div className="line"></div>
      <AppLi />
      <div className="line"></div>
      <NameForm />
      <div className="line"></div>
      <List />
      <div className="line"></div>
      <EssayForm />
      <div className="line"></div>
      <FlavorForm />
      <div className="line"></div>
      <CalculatorTemperature />
      <div className="line"></div>
      <Component />
    </div>
  );
}

//时钟
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//测试
function Div(props) {
  return (<button onClick={handleClick}>{props.name}</button>);
}

function handleClick(a) {
  alert('我是一个粉刷匠！');
}

//用户切换开关状态的按钮
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn:true};
    // 为了在回调中使用 `this`，这个绑定是必不可少的????????????
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   this.setState ({
  //     isToggleOn:!this.state.isToggleOn
  //   });
    
  // }
  handleClick=()=> {
    this.setState ({
      isToggleOn:!this.state.isToggleOn
    });
    
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn?'ON':'OFF'}
      </button>
    );
  }

}


export default App;
