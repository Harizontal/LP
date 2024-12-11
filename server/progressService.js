const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение прогресса пользователя по идентификатору пользователя
  router.get('/user-progress', async (req, res) => {
    try {
      const userId = req.query.id_user;
      const [data] = await pool.execute(
        'SELECT * FROM user_progress WHERE id_user = ?',
        [userId]
      );
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};