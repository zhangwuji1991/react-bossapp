import React from 'react'
import {List,InputItem,NavBar,Icon,Grid} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMegList,sendMsg,recvMsg,readMsg} from '../../redux/chat'
import { getChatId } from '../../util/util';

@connect(
    state=>state,
    {getMegList,sendMsg,recvMsg,readMsg}
)

class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            msg:[],
            showEmoji:false
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getMegList()
            this.props.recvMsg()
        }
    }
    handleSubmit(){
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({text:''})
    }
    fixCarousel(){
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'))
        }, 0)
    }
    // 路由离开的时候执行消息事件
    componentWillUnmount(){
        const to = this.props.match.params.user
        this.props.readMsg(to)
    }
    render(){
        const emoji = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾'
                        .split(' ')
                        .filter(v=>v)
                        .map(v=>({text:v}))
        const userid = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        console.log(this.props)
        if(!users[userid]){
            return null
        }
        const chatid = getChatId(userid,this.props.user._id)
        const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid===chatid)
        return(
            <div id="chat-page">
                <NavBar 
                    mode='dark' 
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{
                        this.props.history.goBack()
                    }}
                >
                    {users[userid].name}
                </NavBar>

                {chatmsgs.map(v=>{
                    const avatar = require(`../../resoure/img/${users[v.from].avatar}.png`)
                    return v.from===userid ? (
                        <List key={v._id}>
                            <Item
                            thumb={avatar}
                            >{v.content}</Item>
                        </List>
                    ):(
                        <List key={v._id}>
                            <Item 
                                className="chat-me"
                                extra={<img src={avatar} title="" />}
                            >{v.content}</Item>
                        </List>
                    )
                })}
                
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={
                                <div>
                                    <span style={{marginRight:15}} onClick={()=>{
                                        this.setState({
                                            showEmoji: !this.state.showEmoji
                                        }) 
                                        this.fixCarousel()
                                    }}>😀</span>
                                    <span onClick={this.handleSubmit}>发送</span>
                                </div>
                            }
                        ></InputItem>
                    </List>
                    {this.state.showEmoji?
                        <Grid
                            data={emoji}
                            columnNum={9}
                            carouselMaxRow={4}
                            isCarousel={true}
                            onClick={el=>{
                                this.setState({
                                    text:this.state.text+el.text
                                })
                            }}
                        />: null}
                    
                </div>
            </div>
        )
    }
}

export default Chat