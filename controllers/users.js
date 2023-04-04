const userRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
userRouter.get('/', async (req, res) => {
  res.send("Hello")
})

userRouter.post('/', async (req, res) => {
  const {name, username, password} = req.body

  const saltRounds = 10
  const hashPassword = await bcrypt.hash(password, saltRounds)

  const user = await new User ({
    name,
    username,
    hashPassword
  })

  const savedUser = await user.save()
  res.status(201).json(savedUser)

})

module.exports = userRouter