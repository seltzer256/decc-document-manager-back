const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const {
  getAllPlans,
  createPlan,
  getPlan,
  updatePlan,
  deletePlan,
} = require('../controllers/planController');

const router = express.Router();

router.use(restrictTo('admin'));

router.use(protect);

router.route('/').get(getAllPlans).post(createPlan);

router.route('/:id').get(getPlan).patch(updatePlan).delete(deletePlan);

module.exports = router;
