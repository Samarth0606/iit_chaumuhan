const express = require('express');  //fn
const app = express() //object => instance of your application
const mongoose = require('mongoose'); //object

// mongoose.connect('mongodb://127.0.0.1:27017/mistri') //prommise
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:cD8ddsCJyjITB8Ah@cluster0.gdg3aft.mongodb.net/') //prommise
.then((res)=>{
    console.log("DB CHAL GIYAA cloud");
})
.catch((err)=>{
    console.log("DB nahi chala maalik" , err);
})

// root route
app.get('/' , (req,res)=>{
    res.send("Swagatam priye mitr")
})



const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CHAL GYA AT PORT: ${PORT}`);
})

// mongodb+srv://samarthvohraindia_db_user:cD8ddsCJyjITB8Ah@cluster0.gdg3aft.mongodb.net/
// samarthvohraindia_db_user
// cD8ddsCJyjITB8Ah