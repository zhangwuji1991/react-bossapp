import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Login from './container/login/index';
import Regsiter from './container/register/index';
import AuthRoute from './component/authroute/index'
import Bossinfo from './container/bossinfo/index'
import Dashboard from './component/dashboard/index'
import Chat from './component/chat/index'
import GeniusInfo from './container/geniusinfo';

class App extends React.Component{
	render(){
		return (
			<div>
                <AuthRoute></AuthRoute>
                <Switch>   
                    <Route path='/bossinfo'    component={Bossinfo}></Route>
                    <Route path='/geniusinfo'  component={GeniusInfo}></Route>
                    <Route path='/login'       component={Login}></Route>
                    <Route path='/register'    component={Regsiter}></Route>
                    <Route path='/chat/:user'  component={Chat}></Route>
                    <Route  component={Dashboard}></Route>
                </Switch>
            </div>
		)
	}
}

export default App