const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение тегов урока по идентификатору урока
  router.get('/lesson-tags', async (req, res) => {
    try {
      const lessonId = req.query.id_lesson;
      const [data] = await pool.execute(
        'SELECT * FROM lesson_tags WHERE id_lesson = ?',
        [lessonId]
      );
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};