const express = require('express');
const router = express.Router();
const NotificationsController = require('../controllers/notificationsController');

router.get('/', NotificationsController.getAll);

module.exports = router;