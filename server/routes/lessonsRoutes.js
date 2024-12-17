const express = require('express');
const router = express.Router();
const LessonsController = require('../controllers/lessonsController');

router.get('/', LessonsController.getAll);

module.exports = router;