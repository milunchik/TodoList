const express = require('express')
const router = express.Router()
const todoControllers = require('./controllers.js')

router.get('/', todoControllers.getTodo)
router.get('/todo/:id', todoControllers.getOneTodo)
router.get('/alltodos', todoControllers.getAllTodos)
router.post('/todos', todoControllers.postTodo)
router.put('/todo/:id', todoControllers.updateTodo)
router.delete('/todos/:id', todoControllers.deleteTodo)

module.exports = router;