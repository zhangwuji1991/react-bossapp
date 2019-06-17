import React from 'react'
import './logo.less'
import logo from './boss.jpg'

class Logo extends React.Component{
    render(){
        return(
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
        )
    }
}

export default Logo;