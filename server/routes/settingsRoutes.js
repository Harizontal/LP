const express = require('express');
const router = express.Router();
const SettingsController = require('../controllers/settingsController');

router.get('/', SettingsController.getAll);

module.exports = router;