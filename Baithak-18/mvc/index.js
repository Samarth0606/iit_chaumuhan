const express = require('express')
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./routes/user.routes')

mongoose.connect('mongodb://127.0.0.1:27017/mistri')
.then(()=>{ console.log("DB CONNECTED") })
.catch((err)=>{ console.log("DB NOT CONNECTED", err) })

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname ,'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) //form data

userRoutes(app)

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})