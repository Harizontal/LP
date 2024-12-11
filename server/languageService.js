const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение всех языков программирования
  router.get('/languages', async (req, res) => {
    try {
      const [data] = await pool.execute('SELECT * FROM languages');
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};