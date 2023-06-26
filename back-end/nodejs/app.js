require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(require('body-parser').urlencoded({ extended: false }))

// Configurations
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routers
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')
app.use(userRouter)
app.use(taskRouter)

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
