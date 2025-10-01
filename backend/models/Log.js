const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // link to user
  date: { type: Date, required: true },
  task: { type: String, required: true },
  hours: { type: Number, required: true },
});

module.exports = mongoose.model('Log', logSchema);
