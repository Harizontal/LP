const express = require('express');
const router = express.Router();
const SubscriptionController = require('../controllers/subscriptionController');

router.get('/', SubscriptionController.getAll);

module.exports = router;