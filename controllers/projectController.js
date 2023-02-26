const Project = require('../models/projectModel');
const factory = require('./handlerFactory');

exports.getAllProjects = factory.getAll(Project);

exports.getProject = factory.getOne(Project);

exports.createProject = factory.createOne(Project);

exports.deleteProject = factory.deleteOne(Project);

exports.updateProject = factory.updateOne(Project);
