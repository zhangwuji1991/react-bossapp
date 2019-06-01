import React from 'react'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, InputItem,Flex  } from 'antd-mobile';
import './index.less'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this)
    }
    componentWillMount(){
        document.title = '登录'
    }
    register(){
        this.props.history.push('./register')
    }
    render(){
        return( 
            <div className="flex-container">
                <Logo />
                <InputItem>账号</InputItem> 
                <WhiteSpace size="xl" />
                <InputItem type="password">密码</InputItem> 
                <WhiteSpace size="xl" />
                <Flex>
                    <Flex.Item>
                        <Button  className="but">登录</Button>
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