const express = require('express') //fn
const app = express() // obj

// root route = "/" default method =GET
app.get('/' , (req,res)=>{
    res.send("Root mei swagat hai")
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`);
})