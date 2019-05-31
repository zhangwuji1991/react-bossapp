import React from 'react'
import Logo from '../../conponent/logo/logo'
import { Button, WhiteSpace,InputItem,Radio,List  } from 'antd-mobile';
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'

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
        this.handleRegister=this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                <Logo/>
                <List>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem><WhiteSpace />
                    <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>密码</InputItem><WhiteSpace />
                    <InputItem onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem><WhiteSpace />
                    <RadioItem checked={this.state.type === 'genius'} onChange={v=>this.handleChange('tyoe','genius')}>
                        牛人
                    </RadioItem><WhiteSpace />
                    <RadioItem checked={this.state.type === 'boss'} onChange={v=>this.handleChange('type','boss')}>
                        Boss
                    </RadioItem><WhiteSpace />
                </List>
                <Button type="primary" onClick={this.handleRegister}>注册</Button><WhiteSpace /> 
            </div>
        )
    }
}

export default Regsiter