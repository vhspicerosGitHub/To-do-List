const { Router } = require('express')
const UserService = require('../services/userService')
const userService = new UserService()

const app = Router()

app.get('/users', async (_, res) => {
  res.json(await userService.GetAll())
  res.end()
})

app.get('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10)
  res.json(await userService.GetByID(userId))
  res.end()
})

app.get('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const user = userService.GetByID(id)
  if (user) { res.json(user) } else { res.status(404).send('User not found') }
  res.end()
})

app.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10)
  await userService.DelteByID(userId)
  res.end()
})
module.exports = app
