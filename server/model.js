//连接mongo
const mongoose = require('mongoose')
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
