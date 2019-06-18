import React from 'react'
import reactDom from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import reducers from './redux/reducers'
import Login from './container/login/index';
import Regsiter from './container/register/index';
import AuthRoute from './component/authroute/index'
import Bossinfo from './container/bossinfo/index'
import Dashboard from './component/dashboard/index'
import Chat from './component/chat/index'
import "lib-flexible"
import GeniusInfo from './container/geniusinfo';
import './util/config'
import 'antd-mobile/dist/antd-mobile.css';
import './style/index.less'

const store = createStore(reducers,applyMiddleware(thunk))

reactDom.render(
    (<Provider store={store} >      
        <BrowserRouter>
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
        </BrowserRouter>
     </Provider>),
    document.getElementById('root')
)

