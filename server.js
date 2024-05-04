const express = require('express')
const mongoose = require('mongoose')
const app = express() 

const Todo = require('./src/models.js');
const todoRoutes = require('./src/routes.js');

mongoose.connect('mongodb+srv://emili:AkEDG8V0mwq0NdJg@todo.bsozhsb.mongodb.net/Node?retryWrites=true&w=majority&appName=Todo')
.then(()=>{
    console.log('Conncted to db')
})
.catch((error)=>{
    console.log('Falied', error)
})

app.use(express.static( 'public'))
app.use(express.json())
app.use(todoRoutes)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server started  http://localhost:${PORT}`)
})