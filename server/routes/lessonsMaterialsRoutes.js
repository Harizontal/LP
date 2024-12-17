const express = require('express');
const router = express.Router();
const LessonsMaterialsController = require('../controllers/lessonsMaterialsController');

router.get('/', LessonsMaterialsController.getAll);

module.exports = router;