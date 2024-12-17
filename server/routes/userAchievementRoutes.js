const express = require('express');
const router = express.Router();
const UserAchievementController = require('../controllers/userAchievementController');

router.get('/', UserAchievementController.getAll);

module.exports = router;