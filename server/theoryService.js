const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  // Получение теоретических разделов по идентификатору языка
  router.get('/theory', async (req, res) => {
    try {
      const languageId = req.query.id_languages;
      const [data] = await pool.execute(
        "SELECT * FROM theorysections WHERE id_languages = ?",
        [languageId]
      );
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};