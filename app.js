const express = require('express')
const taskRouter = require('./controllers/tasks')
const petRouter = require('./controllers/pet')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const mongoose = require('mongoose').default
const config = require('./utils/config')
const cors = require('cors')
require('express-async-errors')
require('dotenv').config()



const app = express()

const mongoUrl = config.mongoUrl
mongoose.connect(mongoUrl).then(() => {
  console.log("connected to mongoDB")
})

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/tasks', taskRouter)
app.use('/api/pet', petRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

app.get('/', (req, res) => {
  res.send("Hello World")
})

module.exports = app