import React from 'react'
import reactDom from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter,Redirect, Route, Switch} from 'react-router-dom'
import reducers from './reducers'
import Login from './container/login/login';
import Regsiter from './container/register/register';
import './config'
import 'antd-mobile/dist/antd-mobile.css';

const store = createStore(reducers,applyMiddleware(thunk))

reactDom.render(
    (<Provider store={store} >      
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Regsiter}></Route>
                <Redirect to='/login'></Redirect>
            </Switch>
        </BrowserRouter>
     </Provider>),
    document.getElementById('root')
)

