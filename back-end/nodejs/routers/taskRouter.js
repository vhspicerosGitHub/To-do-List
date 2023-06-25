const { Router } = require('express')
const app = Router()
const TaskService = require('../services/taskService')
const taskService = new TaskService()

app.get('/tasks/:idUser', (req, res) => {
  const userId = parseInt(req.params.idUser, 10)
  const data = taskService.GetAll(userId)
  if (data) { res.json(data) } else { res.status(404).send('Data not found') }
  res.end()
})
module.exports = app
