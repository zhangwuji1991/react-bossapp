import React from 'react'
import reactDom from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reducers from './reducers'
import Login from './container/login/login';
import Regsiter from './container/register/register';
import AuthRoute from './component/authroute/authroute'
import "lib-flexible"
import './config'
import 'antd-mobile/dist/antd-mobile.css';
import './index.less'


const store = createStore(reducers,applyMiddleware(thunk))
function Boss(){
    return <h1>boss</h1>
}

reactDom.render(
    (<Provider store={store} >      
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/login' component={Login}></Route>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/register' component={Regsiter}></Route>
            </div>
        </BrowserRouter>
     </Provider>),
    document.getElementById('root')
)

