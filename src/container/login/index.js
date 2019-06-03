import React from 'react'
import Logo from '../../component/logo/index'
import { Button, WhiteSpace, InputItem,Flex,Toast  } from 'antd-mobile';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import './index.less'


@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:''
        }
        this.register     = this.register.bind(this)
        this.handleLoging = this.handleLoging.bind(this)
    }
    componentWillMount(){
        document.title = '登录'
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleLoging(){
        console.log(this.state)
        this.props.login(this.state)
    }
    register(){
        this.props.history.push('./register')
    }
    render(){
        return( 
            <div className="flex-container">
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo />
                {   this.props.msg ?
                        Toast.fail(this.props.msg, 1)
                        :null
                    }
                <InputItem onChange={v=>this.handleChange('user',v)}>账号</InputItem> 
                <WhiteSpace size="xl" />
                <InputItem onChange={v=>this.handleChange('pwd',v)} type="password">密码</InputItem> 
                <WhiteSpace size="xl" />
                <Flex>
                    <Flex.Item>
                        <Button onClick={this.handleLoging} className="but">登录</Button>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="xl" />
                <div className="text-tip">
                    没有账号
                    <span onClick={this.register}>立即注册</span>
                </div>
                <WhiteSpace size="xl" />
            </div>
        )
    }
}

export default Login