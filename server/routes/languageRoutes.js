const express = require('express');
const router = express.Router();
const LanguageController = require('../controllers/languageController');

router.get('/', LanguageController.getAll);

module.exports = router;