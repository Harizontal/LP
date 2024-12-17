const TheoryService = require('../services/theoryService');

class TheoryController {
  static async getAll(req, res) {
    try {
      const lesson_id = req.query.id_lesson;
      const criteria = await TheoryService.getAll(lesson_id);
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = TheoryController;