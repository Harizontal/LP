const express = require('express');
const router = express.Router();
const UserProgressController = require('../controllers/userProgressController');

router.get('/', UserProgressController.getAll);

module.exports = router;