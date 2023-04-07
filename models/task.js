const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
  tasks: [{
    user: {
      type: String,
      default: ''
    },
    name: String,
    task: String,
    done: {
      type: Boolean,
      default: false
    }

  }],
  date: { type: Date, default: Date.now },
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task