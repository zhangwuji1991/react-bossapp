import React from 'react'
import { Grid,List } from 'antd-mobile';
import PropTypes from 'prop-types'
import './index.less'

class AvatarSelector extends React.Component{
    static propTypes = {
        selectAvatar:PropTypes.func.isRequired
    }
    constructor(props){
        super(props)
        this.state={

        }
    }
   
    render(){
        const avatarList = 'wk,plf,bjt,xy,fls'.split(',').map(v=>({
                icon: require(`../../resoure/img/${v}.png`),
                text: v
            }))
        const gridHeader = this.state.icon ? (
            <div>
                <span>已选择头像</span>
                <img src={this.state.icon} style={{width:20}} alt="" />
            </div>
        ) : '请选择头像'
        
        return (
            <div className="avatar">
                <List renderHeader={()=>gridHeader}>
                <Grid data={avatarList} columnNum={5} onClick={elm=>{
                    this.setState(elm)
                    this.props.selectAvatar(elm.text)
                }}>

                </Grid>
                </List>
            </div>
        )
    }
}

export default AvatarSelector