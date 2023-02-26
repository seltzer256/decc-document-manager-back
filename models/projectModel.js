const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Project must have a name!'],
  },
  dueDate: {
    type: Date,
    required: [true, 'Project must have a due date!'],
  },
  staff: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Project must have at least one user assigned'],
    },
  ],
  plan: {
    type: mongoose.Schema.ObjectId,
    ref: 'Plan',
    required: [true, 'Project must belong to a plan'],
  },
  reviewer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Project must have a reviewer'],
  },
  docs: {
    task: {
      type: mongoose.Schema.ObjectId,
      ref: 'Task',
    },
    urls: [String],
    completionPercentage: Number,
    observation: String,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
