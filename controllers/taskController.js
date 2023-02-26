const Task = require('../models/taskModel');
const factory = require('./handlerFactory');

exports.getAllTasks = factory.getAll(Task);

exports.getTask = factory.getOne(Task);

exports.createTask = factory.createOne(Task);

exports.deleteTask = factory.deleteOne(Task);

exports.updateTask = factory.updateOne(Task);
