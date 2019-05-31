const express = require('express')
const app     = express()
const userRouter = require('./user')

app.use('/user',userRouter)

app.get('/',function(req,res){
    res.send('<h1>Hellod Word</h1>')
})

app.listen(9093,function(){
    console.log('app start port 9093')
})