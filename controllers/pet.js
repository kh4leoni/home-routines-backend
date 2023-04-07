const petRouter = require('express').Router()
const Pet = require('../models/pet')
const moment = require('moment-timezone')

petRouter.get('/', async (req,res) => {
  petData = await Pet.find({})
  res.json(petData)
})

petRouter.post('/', async (req, res) => {
  const petInfo = req.body
  console.log(req.body)
  const pet = new Pet(petInfo)
  await pet.save()
  console.log("pet info saved")
})

petRouter.put('/:id', async (req, res) => {
  const id = req.params.id
  const { field, value, currentUserName } = req.body
  console.log(currentUserName)


  const doneTime = moment().tz('Europe/Helsinki')

  const updateObj = {
    [field]: {
      done: value,
      time: doneTime.format(),
      user: currentUserName
    }

  }
  const petToUpdate = await Pet.findByIdAndUpdate(
    id,
    updateObj,
    { new: true }
    )



  res.status(200).json({ ...petToUpdate.toJSON(), time: doneTime.format() });


})

module.exports = petRouter