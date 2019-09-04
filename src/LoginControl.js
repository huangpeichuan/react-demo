import React from 'react';
//import logo from './logo.svg';

function UserGreeting() {
  return (<h1>Welcome Back!</h1>);
}
function GuestGreeting() {
  return (<h1>Please Sign Up.</h1>);
}
//提示语
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }else {
    return <GuestGreeting />
  }
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}
//登录按钮
class LoginContrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn:false,}
    this.handelLoginClick = this.handelLoginClick.bind(this);
    this.handelLogoutClick = this.handelLogoutClick.bind(this);
  }

  //登录
  handelLoginClick() {
    this.setState({isLoggedIn:true,});
  }

  //注销
  handelLogoutClick() {
    this.setState({isLoggedIn:false,});
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handelLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handelLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginContrl;
