const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/languageController');

router.get('/', TaskController.getAll);

module.exports = router;