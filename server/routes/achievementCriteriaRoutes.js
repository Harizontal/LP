// src/routes/achievementCriteriaRoutes.js
/**
 * @swagger
 * /achievement-criteria:
 *   get:
 *     summary: Получение всех критериев достижений
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 */
const express = require('express');
const router = express.Router();
const AchievementCriteriaController = require('../controllers/achievementCriteriaController');

router.get('/', AchievementCriteriaController.getAll);

module.exports = router;