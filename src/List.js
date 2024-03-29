import React from 'react';
import axios from 'axios';

/**
 * 模拟使用axios请求后端接口数据
 */

class TrData extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            this.props.users.map( (user,i) => {
                while(i<3){
                    return (
                        <tr key={user.id} className="text-center">
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.sex}</td>
                        </tr>
                    );
                }
                
            })
        );
    }
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            users:[],
            isLoaded:false,
        }
    }
    //组件渲染到DOM时执行此方法
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        .then(function (response) {
          _this.setState({
            users:response.data,
            isLoaded:true
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })
      }

    render() {
        if(!this.state.isLoaded){
            return <div>Loading</div>
        }else{
            return (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">姓名</th>
                    <th className="text-center">年龄</th>
                    <th className="text-center">性别</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TrData users={this.state.users}/>
                  </tbody>
                </table>
            );
        }
        
    }
}
export default List;
