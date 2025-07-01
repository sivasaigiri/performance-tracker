const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  task: {
    type: String,
    required: true,
    trim: true
  },
  hours: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);
