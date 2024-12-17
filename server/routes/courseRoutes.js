const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');

router.get('/', CourseController.getAll);

module.exports = router;