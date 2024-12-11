const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение достижений пользователя по идентификатору пользователя
  router.get('/user-achievements', async (req, res) => {
    try {
      const userId = req.query.id_user;
      const [data] = await pool.execute(
        'SELECT * FROM user_achievements WHERE id_user = ?',
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