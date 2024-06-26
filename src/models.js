const mongoose = require('mongoose')

const TodoShema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    status:{
        type: String,
        require: ['Text', 'In Progress', 'Done'],
        default: 'Text'
    } 
})

const Todo = mongoose.model('Word', TodoShema);
module.exports = Todo;