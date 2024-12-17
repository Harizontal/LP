const express = require('express');
const router = express.Router();
const QuizzesController = require('../controllers/quizzesController');

router.get('/', QuizzesController.getAll);

module.exports = router;