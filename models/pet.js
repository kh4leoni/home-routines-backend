const mongoose = require('mongoose')


const petSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  morningFood: {
    done: {
      type: Boolean,
      default: false
    },
    time: {
      type: Date,
      default: null
    }
  },

  eveningFood: {
    done: {
      type: Boolean,
      default: false
    },
    time: {
      type: Date,
      default: null
    }
  },
  morningOut: {
    done: {
      type: Boolean,
      default: false
    },
    time: {
      type: Date,
      default: null
    }
  },
  dayOut: {
    done: {
      type: Boolean,
      default: false
    },
    time: {
      type: Date,
      default: null
    }
  },
  eveningOut: {
    done: {
      type: Boolean,
      default: false
    },
    time: {
      type: Date,
      default: null
    },
    timeZone: {
      type: String
    }
  },
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet