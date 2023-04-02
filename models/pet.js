const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  morningFood: {
    type: Boolean,
    default: false,
    doneTime: {
      type: Date,
      default: null
    }
  },
  eveningFood: {
    type: Boolean,
    default: false,
    doneTime: {
      type: Date,
      default: null
    }
  },
  morningOut: {
    type: Boolean,
    default: false,
    doneTime: {
      type: Date,
      default: null
    }
  },
  dayOut: {
    type: Boolean,
    default: false,
    doneTime: {
      type: Date,
      default: null
    }
  },
  eveningOut: {
    type: Boolean,
    default: false,
    doneTime: {
      type: Date,
      default: null
    }
  }
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet