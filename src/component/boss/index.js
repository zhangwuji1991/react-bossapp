import React from 'react'

import {connect} from 'react-redux'
import {getuserlist} from '../../redux/chat.redux'
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'

@connect(
    state=>state.chatuser,
    {getuserlist}
)

class Boss extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.props.getuserlist('genius')
    }
    
    render(){
        const Header = Card.Header
        const Body = Card.Body
        return (
            <div>
                <WingBlank>
                    {this.props.userlist.map(v=>(
                    v.avatar?(<Card  key={v._id}>
                            <Header 
                                title={v.user}
                                thumb={require(`../../resoure/img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></Header>
                            <Body>
                                {v.desc.split('\n').map(v=>(
                                    <div key={v}>{v}</div>
                                ))}
                            </Body>
                    </Card>):null
                    ))}
                    <WhiteSpace size="xl"/>
                </WingBlank>
            </div>
        )
    }
}

export default Boss