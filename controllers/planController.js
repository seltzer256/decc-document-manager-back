const Plan = require('../models/planModel');
const factory = require('./handlerFactory');

exports.getAllPlans = factory.getAll(Plan);

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getPlan = factory.getOne(Plan);

exports.createPlan = factory.createOne(Plan);

exports.deletePlan = factory.deleteOne(Plan);

exports.updatePlan = factory.updateOne(Plan);
