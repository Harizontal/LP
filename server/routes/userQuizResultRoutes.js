const express = require('express');
const router = express.Router();
const UserQuizResultController = require('../controllers/userQuizResultController');

router.get('/', UserQuizResultController.getAll);

module.exports = router;