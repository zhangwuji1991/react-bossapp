import React from 'react'
import Logo from '../../component/logo/index'
import { Button, WhiteSpace, InputItem, Radio, List, Toast  } from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/user.redux'
import './index.less'

@connect(
    state=>state.user,
    {register}
)

class Regsiter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius' 
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.login = this.login.bind(this)
    }
    componentDidMount(){
        document.title = '注册'
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
        console.log(val)
    }
    handleRegister(){
        this.props.register(this.state)
    }
    login(){
        this.props.history.push('./login')
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div className="flex-container">
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo/>
                <List>
                    {   this.props.msg ?
                        Toast.fail(this.props.msg, 1)
                        :null
                    }
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                    <WhiteSpace size="xl"/>
                    <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                    <WhiteSpace size="xl" />
                    <InputItem type="password" onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                    <WhiteSpace size="xl" />
                    <RadioItem checked={this.state.type === 'genius'} onChange={()=>this.handleChange('tyoe','genius')}>
                        牛人
                    </RadioItem>
                    <WhiteSpace size="xl" />
                    <RadioItem checked={this.state.type === 'boss'} onChange={()=>this.handleChange('type','boss')}>
                        Boss
                    </RadioItem>
                    <WhiteSpace size="xl" />
                </List>
                <Button className="but" onClick={this.handleRegister}>注册</Button>
                <WhiteSpace /> 
                <div className="text-tip">
                    已有账号
                    <span onClick={this.login}>立即登录</span>
                </div>
            </div>
        )
    }
}

export default Regsiter