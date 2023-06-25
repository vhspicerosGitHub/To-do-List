require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const UserServices = require('./services/userService')
const userServices = new UserServices()

// Configurations
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Nuestro primer WS Get
app.get('/', (req, res) => {
  console.log('hola mundo')
  res.end()
})

app.get('/users', (_, res) => {
  res.json(userServices.GetAll())
  res.end()
})

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10)
  res.json(userServices.GetByID(userId))
  res.end()
})
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const user = userServices.GetByID(id)
  if (user) { res.json(user) } else { res.status(404).send('User not found') }
  res.end()
})

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10)
  userServices.DelteByID(userId)
  res.end()
})

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
