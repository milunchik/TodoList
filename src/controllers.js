const TodoModel = require('./models.js')

const getTodo = async(req, res)=>{
    try{
    const todos = await TodoModel.find()
    res.status(200).json(todos)
    }catch(error){
        res.status(400).send(error)
    }
}

const getOneTodo = async(req, res)=>{
    try{
        const {id} = req.params
        const todo = await TodoModel.findById({_id: id})
        res.status(200).json(todo)
    }catch(error){
        res.status(400).send(error)
    }
}
const getAllTodos = async(req, res)=>{
    try{
        const allTodos = await TodoModel.find()
        res.json(allTodos)
        }
        catch(error){
        res.status(400).send(error)
    }
}

const postTodo = async(req, res)=>{
    try{
        const {text, date} = req.body
        const todo = await TodoModel.create({text, date})
        res.status(200).json(todo)
    }catch(error){
        res.status(400).send(error)
    }
}
const updateTodo = async(req, res)=>{
    try{
        const {id} = req.params
        const{text, date, status} = req.body;
        const updateTodo = await TodoModel.findByIdAndUpdate(id,{text, date, status})
        res.status(200).json(updateTodo)
    }catch(error){
        res.status(400).send(error)
    }
}

const deleteTodo = async(req, res)=>{
    try{
        const {id} = req.params
        const deleteTodo = await TodoModel.findByIdAndDelete(id)
        if(!deleteTodo){
            return res.status(404).json({message: "Word not found"})
        }
        res.status(200).json({message: "Deleted"})
    }catch(error){
        res.status(400).send(error)
    }
}

module.exports = {
    getTodo,
    getOneTodo,
    getAllTodos,
    postTodo,
    updateTodo, 
    deleteTodo
}