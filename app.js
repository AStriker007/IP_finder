const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
app.get('/x',(req,res,next)=>{
res.json({msg:req.socket.remoteAddress})
})
app.listen(process.env.PORT,()=>{
    console.log('Listening')
})