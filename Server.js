const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send("Hello This is Git Testing Project!")
})

app.listen(PORT,(req,res)=>{
    console.log(`Server Running at ${PORT}`)
})