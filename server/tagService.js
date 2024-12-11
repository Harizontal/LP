const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение всех тегов
  router.get('/tags', async (req, res) => {
    try {
      const [data] = await pool.execute('SELECT * FROM tags');
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};