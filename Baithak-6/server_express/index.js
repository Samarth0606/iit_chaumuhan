const express = require('express'); //fn
const app = express() // object

app.get('/attendance' , (req,res)=>{
    res.send("Welcome to get route")
})

app.post('/attendance' , (req,res)=>{
    res.send("Attendance leloo")
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`);
})