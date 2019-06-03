const express = require('express')
const Router  = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd':0,'_v':0}


Router.get('/list',function(req,res){
    // User.remove({},function(req,res){})
    User.find({},function(err,doc){
        return res.json(doc)
    })
})

//注册
Router.post('/register',function(req,res){
    console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({user,pwd:md5Pwd(pwd),type})
        userModel.save(function(e,d){
            if (e) {
                return res.json({code:1,msg:'后端出错了'})
            }
            const {user, type, _id} = d
            // 设置cookie
            res.cookie('userid',d._id)
            return res.json({code:0,data:{user,type,_id}})
        })
    })
})

//登录
Router.post('/login',function(req,res){
    const {user,pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if (!doc) {
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        // 设置cookie
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})

Router.get('/info',function(req,res){
    const {userid} = req.cookies
    if (!userid) {
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if (err) {
            return res.json({code:1,msg:'后端出错'})
        }
        if (doc) {
            return res.json({code:0,data:doc})
        }
    })
})


function md5Pwd(pwd){
    const salt = 'immoc_ifadfajfaj!@#$%%%--'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router