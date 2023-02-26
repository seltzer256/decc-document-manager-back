const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Task must have a name!'],
  },
  helpUrl: {
    autoFill: Boolean,
    url: {
      type: String,
      required: [true, 'Task must have an url'],
    },
  },
  instructions: String,
  defaultFilename: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
