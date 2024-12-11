const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение всех критериев достижений
  router.get('/achievement-criteria', async (req, res) => {
    try {
      const [data] = await pool.execute('SELECT * FROM achievement_criteria');
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};