const mongoose = require('mongoose')


const petSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  dentastix: {
    done: {
      type: Boolean,
      default: false
    },
    time: {
      type: Date,
      default: null
    },
    user: {
      type: String,
      default: ""
    }
  },
  morningFood: {
    done: {
      type: Boolean,
      default: false
    },
    time: {
      type: Date,
      default: null
    },
    user: {
      type: String,
      default: ""
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
    },
    user: {
      type: String,
      default: ""
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
    },
    user: {
      type: String,
      default: ""
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
    },
    user: {
      type: String,
      default: ""
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
    },
    user: {
      type: String,
      default: ""
    }
  },
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet