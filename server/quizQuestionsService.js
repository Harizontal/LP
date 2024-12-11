const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение вопросов квиза по идентификатору квиза
  router.get('/quiz-questions', async (req, res) => {
    try {
      const quizId = req.query.id_quiz;
      const [data] = await pool.execute(
        'SELECT * FROM quiz_questions WHERE id_quiz = ?',
        [quizId]
      );
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};