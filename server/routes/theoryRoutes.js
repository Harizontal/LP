const express = require('express');
const router = express.Router();
const TheoryController = require('../controllers/theoryController');

router.get('/', TheoryController.getAll);

module.exports = router;