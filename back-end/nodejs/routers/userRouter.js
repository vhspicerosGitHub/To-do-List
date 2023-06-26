const { Router } = require('express')
const UserService = require('../services/userService')
const userService = new UserService()

const app = Router()

app.get('/users', async (_, res) => {
  res.json(await userService.GetAll())
  res.end()
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id
  const user = userService.GetByID(id)
  if (user) { res.json(user) } else { res.status(404).send('User not found') }
  res.end()
})

app.post('/users/', async (req, res) => {
  const email = req.body.email
  console.log(req.body)
  await userService.Create(email)
  res.end()
})

app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id
  await userService.DeleteByID(userId)
  res.redirect('/users')
  res.end()
})
module.exports = app
