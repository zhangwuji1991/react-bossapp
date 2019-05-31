import React from 'react'
import Logo from '../../conponent/logo/logo'
import { Button, WhiteSpace,InputItem  } from 'antd-mobile';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this)
    }
    register(){
        this.props.history.push('./register')
    }
    render(){
        return(
            <div>
                <Logo/>
                <h2>登录页面</h2>
                <InputItem>账号</InputItem><WhiteSpace />
                <InputItem type="password">密码</InputItem><WhiteSpace />
                <Button type="primary">登录</Button><WhiteSpace />
                <Button onClick={this.register} type="primary">注册</Button><WhiteSpace /> 
            </div>
        )
    }
}

export default Login