const express = require('express');  //fn
const app = express() //object => instance of your application
const mongoose = require('mongoose'); //object
const productRoutes = require('./routes/product.routes')
const path = require('path') //prebuilt

// mongoose.connect('mongodb://127.0.0.1:27017/mistri') //prommise
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:cD8ddsCJyjITB8Ah@cluster0.gdg3aft.mongodb.net/') //prommise
.then((res)=>{
    console.log("DB CHAL GIYAA cloud");
})
.catch((err)=>{
    console.log("DB nahi chala maalik" , err);
})

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form

// root route
app.get('/' , (req,res)=>{
    res.send("Swagatam priye mitr")
})

productRoutes(app) //

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CHAL GYA AT PORT: ${PORT}`);
})

// mongodb+srv://samarthvohraindia_db_user:cD8ddsCJyjITB8Ah@cluster0.gdg3aft.mongodb.net/
// samarthvohraindia_db_user
// cD8ddsCJyjITB8Ah