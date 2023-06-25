const { Router } = require('express')
const UserService = require('../services/userService')
const userService = new UserService()

const app = Router()

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
module.exports = app
