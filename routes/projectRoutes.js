const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const {
  getAllProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');

const router = express.Router();

router.use(protect);

router.use(restrictTo('admin'));

router.route('/').get(getAllProjects).post(createProject);

router.route('/:id').get(getProject).patch(updateProject).delete(deleteProject);

module.exports = router;
