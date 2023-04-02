const petRouter = require('express').Router()
const Pet = require('../models/pet')

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
  const { field, value } = req.body


    const petToUpdate = await Pet.findByIdAndUpdate(
    id,
    { [field]: value },
    { new: true }
    )

    res.status(200).json(petToUpdate)


})

module.exports = petRouter