import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { AppRegistry, Text, TextInput, View, Button } from 'react-native';

// 这是一个完整的组件形态：渲染的UI、初始state、组件生命不同阶段函数调用
/*clock组件开始*/
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }
  render() {
    return (
      <div>
        <h3>Hallo EveryDay!</h3>
        <p> It is {this.state.time.toString()}</p>
      </div>
    )
  }
}
/*clock组件结束*/

// 组件的属性决定着返回只有一处不同的React 元素
/*login组件开始*/
class LoginTip extends Component {
  render() {
    if (this.props.isLogin) {
      return <p>Welcome to website</p>
    }
    return <p>please login in</p>
  }
}
// 组件的属性决定着返回有多处不同的React 元素
// 如不同按钮点击事件的不同，这个就得从组件属性传递过来，因此就得在父组件中调用不同的子组件
class Button1 extends Component {
  render() {
    if (this.props.isLogin) {
      return <button className='btn-component' onClick={this.props.click}>Login Out</button>
    }
    return <button className='btn-component' onClick={this.props.click}>Login In</button>
  }
}

class Button2 extends Component {
  render() {
    return (
      <div>
        { 
          this.props.isLogin
          ? <button className='btn-component' onClick={this.props.click}>Login Out</button>
          : <button className='btn-component' onClick={this.props.click}>Login In</button>
        }
      </div>
    )
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogin: false};
    this.Logout = this.Logout.bind(this);
    this.Login = this.Login.bind(this);
  }

  Logout() {
    this.setState({isLogin: false})
  }
  Login() {
    this.setState({isLogin: true})
  }

  render() {
    let button;
    let isLogin = this.state.isLogin;
    if (isLogin) {
      button = <Button isLogin={isLogin} click={this.Logout} /> 
    } else {
      button = <Button isLogin={isLogin} click={this.Login} /> 
    }
    return (
      <div>
        <LoginTip isLogin={isLogin} />
        {button}
      </div>
    )
  }
}
/*login组件结束*/

<Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>;

ReactDOM.render(<Button />, document.getElementById('root'));
