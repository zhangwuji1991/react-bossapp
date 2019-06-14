import React from 'react'
import {List,InputItem} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMegList,sendMsg,recvMsg} from '../../redux/chat'

@connect(
    state=>state,
    {getMegList,sendMsg,recvMsg}
)

class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            msg:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.getMegList()
        this.props.recvMsg()
        console.log(this.props)
    }
    handleSubmit(){
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({text:''})
    }
    render(){
        return(
            <div>
               {this.props.chat.chatmsg.map(v=>{
                   return <p key={v}>{v}</p>
               })}
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={<span onClick={this.handleSubmit}>发送</span>}
                        ></InputItem>
                    </List>
                </div>
            </div>
        )
    }
}

export default Chat