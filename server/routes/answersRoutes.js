const express = require('express');
const router = express.Router();
const AnswersController = require('../controllers/answersController');

router.get('/', AnswersController.getAll);

module.exports = router;