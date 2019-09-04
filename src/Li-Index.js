import React from 'react';

class AppLi extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          list:[{id:1,val:'aa'},{id:2,val:'bb'},{id:3,val:'cc'}]
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
                        <Li key={item.id} val={item.val} />
                        //<Li key={index} val={item.val} h={item.s} />
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
            <li>
                {this.props.val}
                <input type="text"></input>
            </li>
        );
    }
}

export default AppLi;

/* 
页面渲染好了之后，3个input输入框依次输入1，2，3：
当我们用index作为key的时候，点击reverse会发现，input输入框还是1，2，3顺序显示，但是这并不符合我们的预期，控制台中此时打印的也是update；
当我们用对象中的id作为key的时候，点击reverse，此时神奇的事情发生了，input输入框变成了3，2，1，符合我们的预期，控制台此时打印的也是update；
为什么会这样呢？
当我们传入index作为key时，此时的key为0，1，2，
当我们点击reverse重新排序后，index传进去的key还是0，1，2，此时react比较key=0时，发现只需要更新子节点的值就可以，于是只把item替换成了cc，而input则相反，
当我们传入id作为index的时候，，点击reverse后，此时的key变成了3，2，1，根据react的diff算法，react还是能分辨出只需要移动子节点即可完成更新，因此input也随之变化。
那说了这么多，其实对于index作为key我们是不推荐的，除非你能够保证他们不会发生变化。

作者：2014🐼
链接：https://juejin.im/post/5a31dda3f265da43052ea207
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
