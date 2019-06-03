import React from 'react'
import AvatarSelector from '../../component/avatar-selector/index'
import { NavBar,InputItem,List,WhiteSpace,TextareaItem,Button } from 'antd-mobile';
import './index.less'


class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            company:'',
            money:'',
            desc:''
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        return (
            <div className="boss">
                <NavBar className="boss-nav">Boss完善信息</NavBar>
                <AvatarSelector></AvatarSelector>
                <List  className="flex-container">
                    <InputItem onChange={v=>this.onChange('title',v)}>招聘职位</InputItem>
                    <WhiteSpace size="xl"/>
                    <InputItem type="password" onChange={v=>this.onChange('company',v)}>公司名称</InputItem>
                    <WhiteSpace size="xl" />
                    <InputItem type="password" onChange={v=>this.onChange('money',v)}>职位薪资</InputItem>
                    <WhiteSpace size="xl" />
                    <TextareaItem type="password" row={3} autoHeight title='职位要求' onChange={v=>this.onChange('desc',v)}></TextareaItem>
                    <WhiteSpace size="xl" />
                    <Button className="but" onClick={this.handleRegister}>保存</Button>
                </List>
            </div>
        )
    }
}

export default BossInfo