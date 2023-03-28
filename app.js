const express = require('express')
const taskRouter = require('./controllers/tasks')
const mongoose = require('mongoose').default
const cors = require('cors')
require('dotenv').config()



const app = express()

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl).then(() => {
  console.log("connected to mongoDB")
})

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/tasks', taskRouter)

app.get('/', (req, res) => {
  res.send("Hello World")
})

module.exports = app