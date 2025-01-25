const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.get("/profile",(req,res)=>{
    res.send("This is a Profile page!")
})

app.get('/',(req,res)=>{
    res.send("Hello This is Git Testing Project!")
})

app.listen(PORT,(req,res)=>{
    console.log(`Server Running at ${PORT}`)
})