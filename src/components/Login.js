import React, {Component} from 'react'
import style from '../assets/css/style.css'
import http from "../server";


export default class Login extends Component {
    constructor(props) {

        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.login = this.login.bind(this);
    }

    login() {
        let params = {
            "username": this.state.username,
            "password": this.state.password,
        };
        http.post("/api/login", params).then((res) => {
            if (res === 'login error') {
                alert('登录失败')
            } else {
                this.props.history.push('/')
            }
        })
    }

    usernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    passwordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className="main" style={style}>
                <div className="title">
                    <span>密码登录</span>
                </div>
                <div className="title-msg">
                    <span>请输入登录账户和密码</span>
                </div>
                <form className="login-form" noValidate>
                    <div className="input-content">
                        <div>
                            <input type="text" value={this.state.username}
                                   onChange={this.usernameChange.bind(this)}
                                   autoComplete="off" placeholder="用户名" name="username" required/>
                        </div>
                        <div style={{marginTop: '16px'}}>
                            <input type="password" value={this.state.password}
                                   onChange={this.passwordChange.bind(this)}
                                   autoComplete="off" placeholder="登录密码" name="password" required maxLength="32"/>
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <div onClick={this.login} className="enter-btn">登录</div>
                    </div>
                    <div className="foot">
                        <div className="left"><span>忘记密码 ?</span></div>
                        <div className="right"><span><a href={"/register"}>注册账户</a></span></div>
                    </div>
                </form>
            </div>
        )
    }
}