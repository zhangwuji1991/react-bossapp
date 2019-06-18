import React from 'react'
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './index.less'

@withRouter
class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    hadleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        return  (
               <div className="usercard">
                    <WingBlank>
                    {this.props.userlist.map(v=>(
                    v.avatar?(<Card  key={v._id} 
                                     onClick={()=>this.hadleClick(v)}
                               >
                            <Header 
                                title={
                                    <div className="userlist-title">
                                        <p className="title">{v.title}</p>
                                        <img src={require(`../../resoure/img/${v.avatar}.png`)} alt="" />
                                        <span className="userlist-user">{v.user}</span>
                                    </div>
                                }
                                // thumb={require(`../../resoure/img/${v.avatar}.png`)}
                                // extra={<span className="userlist-title">{v.user}</span>}
                            ></Header>
                            <Body>
                                {v.type==="boss" ? <div>公司:{v.company}</div> : null}
                                {v.desc.split('\n').map(d=>(
                                    <div key={d}>{d}</div>
                                ))}
                                 {v.type==="boss" ? <div>薪资:{v.money}</div> : null}
                            </Body>
                    </Card>):null
                    ))}
                    <WhiteSpace size="xl"/>
                </WingBlank>
               </div>
        )
    }
}

export default UserCard