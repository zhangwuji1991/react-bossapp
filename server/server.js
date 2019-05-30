const express = require('express')
const app     = express()
const mongoose = require('mongoose')
//连接mongo
const DB_URL = 'mongodb://21.254.181.14:8082/imooc'

mongoose.connect(DB_URL)

mongoose.connection.on('connected',function(){
    console.log('mongo connect sussess')
})

// 类似mysql的表 mongo里有文档字段概念
 const User = mongoose.model('user',new mongoose.Schema({
     user:{
         type:String,
         require:true
     },
     age:{
         type:Number,
         require:true
     }
 }))

//添加数据
// User.create({
//     user:'xiaoming',
//     age:18
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })


app.get('/',function(req,res){
    res.send('<h1>Hellod Word</h1>')
})

app.get('/data',function(req,res){
    User.findOne({user: 'xiaoming'},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('app start port 9093')
})