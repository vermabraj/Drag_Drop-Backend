const express = require('express')
const cors = require("cors");
const app = express()
const {connection} = require("./db");

const { galleryRoute } = require('./Routes/Gallery.Route');
require("dotenv").config()
app.use(express.json())

app.use(cors());
app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/gallery", galleryRoute);

app.listen(process.env.port,async()=>{
    try{
        await connection
         console.log("Connected to DB")
    }catch(err){
        console.log(err.message)
    }
    console.log("Server is running at port 4500");
})