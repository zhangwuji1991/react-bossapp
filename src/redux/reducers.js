// 合并所有的reducer 并且返回
import { combineReducers } from 'redux'
import {user} from './user.redux'
import {chatuser} from './chat.redux'

export default combineReducers({user,chatuser})