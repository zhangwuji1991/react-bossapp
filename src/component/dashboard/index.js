import React from 'react'
import { connect } from 'react-redux';
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlinkbar/index'
import {Switch,Route} from 'react-router-dom'
import Boss from '../boss/index'
import Genius from '../genius/index'
import User from '../user/index'
import './index.less'

function Msg(){
    return  <div className="dashboard">
          Msg     
    </div>
}


@connect(
    state=>state
)
class Dashboard extends React.Component{
    

    render(){
        const user = this.props.user
        const {pathname} = this.props.location
        console.log(pathname)
        const navList = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.type==='genius'
            },
            {
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'Boss列表',
                component:Genius,
                hide:user.type==='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
    
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        
        return (
            <div className="dashboard">
               <NavBar  className="navbar">
                    {navList.find(v=>v.path===pathname).title}
               </NavBar>
               <div style={{marginTop:45}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
               </div>
               <NavLinkBar data={navList} ></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard