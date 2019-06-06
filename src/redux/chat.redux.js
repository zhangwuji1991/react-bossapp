
import axios from 'axios'
// import { StateType } from 'rmc-tabs/lib/Tabs';

const USER_LIST = 'USER_LIST'

const initState={
    userlist:[]
}

//reducer
export function chatuser(state=initState,action){
    switch(action.type){
        case USER_LIST:
            return {...state, userlist: action.payload }
        default:
            return state
    }
}

function userList(data){
    return { type:USER_LIST, payload:data}
}

export function getuserlist(type){
    return dispatch=>{
        axios.get('/user/list?type='+type).then(res=>{
            if (res.data.code===0) {
               dispatch(userList(res.data.data))
            }
        })
    }
}