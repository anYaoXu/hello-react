import React, {Component} from 'react';
import {BrowserRouter as Router,Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag: false
         };
    }
    login=(e)=>{
        e.preventDefault();
        const username = this.refs.userName.value;
        const password = this.refs.password.value;
        console.log(username,password);
        if(username === 'admin' && password == '111111'){
            this.setState({
                loginFlag: true
            });
        }else{
            alert('请输入正确的用户名密码');
        }
    }
    render() {
        if(this.state.loginFlag){
            return (
                // <Router><Redirect to='/news'/></Router>  两种方式都可以
                <Router><Redirect to={{pathname:'/news'}}/></Router>

            )
        }
        return (
            <form onSubmit={this.login}>
                <br/><br/>
                <input type="text" ref="userName"/> <br/><br/>
                <input type="password" ref="password"/><br/><br/>
                <button type="submit">执行登录</button><br/><br/>
            </form>
        );
    }
}

export default Login;