const express = require('express');
const router = express.Router();
const quizQuestionsController = require('../controllers/quizQuestionsController');

router.get('/', quizQuestionsController.getAll);

module.exports = router;