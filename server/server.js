const express = require('express')
const app     = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')

// socket
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connect',function(socket){
    socket.on('sendmsg',function(data){
        const {from, to, msg} = data
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            io.emit('recvmsg',Object.assign({},doc._doc))
        })  
    })
})


const userRouter = require('./user')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

server.listen(9093,function(){
    console.log('app start port 9093')
})