const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: [true, 'Plan must have an activity name!'],
  },
  strategicObj: String,
  operationalObj: String,
  tasks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Task',
      required: [true, 'Plan must have at least one task'],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
