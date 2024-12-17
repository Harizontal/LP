const express = require('express');
const router = express.Router();
const LessonsTagsController = require('../controllers/lessonsTagsController');

router.get('/', LessonsTagsController.getAll);

module.exports = router;