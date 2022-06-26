const Router = require('express').Router
const taskController = require('../controllers/task.controller')

module.exports = () => {
  const api = new Router()

  api.get('/tasks', taskController.findAll)

  api.get('/tasks/status/:status', taskController.findByStatus)

  api.get('/tasks/id/:id', taskController.findById)

  api.post('/tasks', taskController.create)

  api.put('/tasks/id/:id', taskController.update)

  api.delete('/tasks/id/:id', taskController.delete)

  return api
}
