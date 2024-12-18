const express = require("express")
const app = express();
const env = require("dotenv").config()
const mongoose = require('mongoose')
const path = require('path');




const connectDB = mongoose.connect(process.env.MONGO_URI);


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//view engine setup
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))


//route 
app.get('/',(req,res)=>{
    res.send('hell')
})


//localhost setup
app.listen(process.env.PORT,()=>{
    console.log(`Server running on localhost:1000`)
}
)


module.exports = app;