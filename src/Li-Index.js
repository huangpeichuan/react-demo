import React from 'react';

class AppLi extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          list:[{id:1,val:'aa',s:'a1'},{id:2,val:'bb',s:'b1'},{id:3,val:'cc',s:'c1'}]
      }
    }

    handelClick() {
        this.state.list.reverse();
        this.setState({});
    }
    handelSplice() {
        this.state.list.splice(1,1);
        this.setState({});
    }

    render() {
        return (
            <ul>
                <button onClick = {this.handelSplice.bind(this)}>delete</button>
                <button onClick = {this.handelClick.bind(this)}>reverse</button>
                {
                  this.state.list.map( (item,index) => {
                      return (
                        <Li key={index} val={item.val} h={item.s} />
                      )
                  })
                }
            </ul>
        );
    }
}

//Li组件
class Li extends React.Component {
    // constructor(props){
    //   super(props);
    // }

    componentDidMount() {
        console.info("=======mount======");
    }

    componentWillUpdate(nextProps,nextState) {
        console.info("======update======");
    }

    render() {
        return (
            <li ss={this.props.h}>
                {this.props.val}
                <input type="text"></input>
            </li>
        );
    }
}

export default AppLi;