const taskRouter = require('express').Router()
const Task = require('../models/task')

taskRouter.get('/', async(req, res) => {
  const foundTasks = await Task.find({})
  res.json(foundTasks)
})

taskRouter.get('/:id', async (req, res) => {
  const foundTask = await Task.findById(req.params.id)
  res.json(foundTask)
})

taskRouter.post('/', async (req, res) => {
  const {mikaelTask, jenniTask, almaTask} = await req.body



  const todayTasks = new Task({
    tasks: [
      {name: 'Mikael', task: mikaelTask},
      {name: 'Jenni', task: jenniTask},
      {name: 'Alma', task: almaTask}
    ]
  })

  await todayTasks.save()
  res.status(201).json('Task saved')
})

taskRouter.put('/:id', async (req, res) => {
  const newTasks = req.body
  console.log(req.body)
  const id = req.params.id



  const updatedTask = await Task.findOneAndUpdate(
  { _id: id },
  newTasks,
  { new: true }
  )
  res.json(updatedTask)

})

module.exports = taskRouter