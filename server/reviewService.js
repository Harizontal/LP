const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение отзывов о курсах по идентификатору курса
  router.get('/course-reviews', async (req, res) => {
    try {
      const courseId = req.query.id_course;
      const [data] = await pool.execute(
        'SELECT * FROM course_reviews WHERE id_course = ?',
        [courseId]
      );
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};