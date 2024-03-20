const express=require('express');
const app=express();
const mongoose = require('mongoose')
require("dotenv").config() 
const port=3000;

app.get('/ping',(req,res)=>{
    res.send("Pong");
});

app.listen(port,()=>{
    console.log(`App running on port: ${port}`)

});
app.get('/home', (req,res)=> {
    mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((err)=>{
        console.error(err) 
    })
    const dbstatus = mongoose.connection ? "connected":"Disconnected"
    res.send(`Dastabase connection status :${dbstatus} `)
})