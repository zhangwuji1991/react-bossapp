import React from 'react'
import {connect} from 'react-redux'
import {Result,List,WhiteSpace,Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import './index.less'
import {logoutSubmit} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
    state=>state.user,
    {logoutSubmit}
)

class User extends React.Component{

    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(){
        Modal.alert('注销','确认退出登录么???',[
            {text:'取消',onPress: ()=> console.log('cancel')},
            {text:'确定',onPress: ()=> {
               browserCookie.erase('userid')
               this.props.logoutSubmit()
            }}
        ])
    }

    render(){
        const props = this.props
        const Item  = List.Item
        const Brief = Item.Brief
        return this.props.user ? (
            <div className="user">
                <Result
                    img={<img src={require(`../../resoure/img/${this.props.avatar}.png`)} alt="" style={{width:50}}></img>}
                    title={this.props.title}
                    message={props.type==='boss' ? props.company : null}
                />
                <List renderHeader={()=>'简介'}>
                    <Item multipleLine>
                        {props.title}
                        {this.props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                        {props.money?<Brief>薪资:{props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace size="xl" />
                <List>
                    <Item onClick={this.logout}>
                        退出
                    </Item>
                </List>
            </div>
        ) :  <Redirect to={props.redirectTo}></Redirect>
    }
}

export default User