import React from 'react'
import {connect} from 'react-redux'
import {getuserlist} from '../../redux/chat.redux'
import UserCard from '../usercar/index'
import './index.less'

@connect(
    state=>state.chatuser,
    {getuserlist}
)

class Genius extends React.Component{

    componentDidMount(){
        this.props.getuserlist('boss')
    }
    
    render(){

        return <UserCard userlist={this.props.userlist} ></UserCard>
        
    }
}

export default Genius