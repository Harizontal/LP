const express = require('express');
const router = express.Router();
const CourseReviewController = require('../controllers/courseReviewController');

router.get('/', CourseReviewController.getAll);

module.exports = router;