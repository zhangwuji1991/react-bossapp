import React from 'react'
import { connect } from 'react-redux';
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlinkbar/index'
import {Switch,Route} from 'react-router-dom'
import Boss from '../../component/boss'
import './index.less'


function Genius(){
    return  <div className="dashboard">
          Genius     
    </div>
}
function Msg(){
    return  <div className="dashboard">
          Msg     
    </div>
}

function User(){
    return  <div className="dashboard">
          me     
    </div>
}

@connect(
    state=>state
)
class Dashboard extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            
        }
    }
   

    render(){
        const user = this.props.user
        const {pathname} = this.props.location
        const navList = [
            {
                path:'/boss',
                text:'boss',
                icon:'job',
                title:'牛人列表',
                component:Boss,
                hide:user.type==='genius'
    
            },
            {
                path:'/genius',
                text:'genius',
                icon:'boss',
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
               <NavBar  className="navbar">{navList.find(v=>v.path===pathname).title}</NavBar>
               <div style={{marginTop:45}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
               </div>
               <NavLinkBar data={navList} className=""></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard