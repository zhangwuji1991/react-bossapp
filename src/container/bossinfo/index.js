import React from 'react'
import AvatarSelector from '../../component/avatar-selector/index'
import { NavBar,InputItem,List,WhiteSpace,TextareaItem,Button } from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux'
import {upadata} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {upadata}
)

class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            company:'',
            money:'',
            desc:'',
            avatar:''
        }
        this.onChange=this.onChange.bind(this)
        this.handleSava=this.handleSava.bind(this)
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleSava(){
        console.log(this.state)
        this.props.upadata(this.state)
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div className="boss">
                {redirect&&redirect!==path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar className="boss-nav">Boss完善信息</NavBar>
                <AvatarSelector selectAvatar={(imgname)=>{
                    this.setState({
                        avatar:imgname
                    })
                }}></AvatarSelector>
                <List  className="flex-container">
                    <InputItem onChange={v=>this.onChange('title',v)}>招聘职位</InputItem>
                    <WhiteSpace size="xl"/>
                    <InputItem  onChange={v=>this.onChange('company',v)}>公司名称</InputItem>
                    <WhiteSpace size="xl" />
                    <InputItem  onChange={v=>this.onChange('money',v)}>职位薪资</InputItem>
                    <WhiteSpace size="xl" />
                    <TextareaItem type="password" row={3} autoHeight title='职位要求' onChange={v=>this.onChange('desc',v)}></TextareaItem>
                    <WhiteSpace size="xl" />
                    <Button className="but" onClick={this.handleSava}>保存</Button>
                </List>
            </div>
        )
    }
}

export default BossInfo