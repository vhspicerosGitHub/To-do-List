require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const UserService = require('./services/userService')
const TaskService = require('./services/taskService')
const userService = new UserService()
const taskService = new TaskService()

// Configurations
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/users', (_, res) => {
  res.json(userService.GetAll())
  res.end()
})

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10)
  res.json(userService.GetByID(userId))
  res.end()
})

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const user = userService.GetByID(id)
  if (user) { res.json(user) } else { res.status(404).send('User not found') }
  res.end()
})

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10)
  userService.DelteByID(userId)
  res.end()
})

app.get('/tasks/:idUser', (req, res) => {
  const userId = parseInt(req.params.idUser, 10)
  const data = res.json(taskService.GetAll(userId))
  if (data) { res.json(data) } else { res.status(404).send('Data not found') }
  res.end()
})

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
