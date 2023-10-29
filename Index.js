const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./src/configs/db')
const router = require('./src/Routes/TodoRoutes')
const app = express()
const dotenv=require('dotenv').config();
const port = process.env.PORT || 8080 ;

connectDB()

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended:false}));

app.use('/api/v/task',router )

app.listen(port, ()=>{
    console.log(`LISTEN ON: ${port} `)
})
