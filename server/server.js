const express = require('express')
const app     = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

app.get('/',function(req,res){
    res.send('<h1>Hellod Word</h1>')
})

app.listen(9093,function(){
    console.log('app start port 9093')
})