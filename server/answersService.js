const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение ответов на задачи по идентификатору задачи
  router.get('/answers', async (req, res) => {
    try {
      const taskId = req.query.id_task;
      const [data] = await pool.execute(
        "SELECT * FROM taskanswers WHERE id_task = ?",
        [taskId]
      );
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};