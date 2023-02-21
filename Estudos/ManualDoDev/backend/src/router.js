const express = require('express')
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddlewares')

const router = express.Router()

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware.validateTitle,tasksController.createdTask)
router.delete('/task/:id', tasksController.deleteTask)
router.put('/task/:id', tasksMiddleware.validateTitle, tasksMiddleware.validateFieldsStatus, tasksController.updateTask)

module.exports = router