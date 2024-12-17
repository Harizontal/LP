const LessonsMaterialsService = require('../services/lessonsMaterialsService');

class LessonsMaterialsController {
  static async getAll(req, res) {
    try {
      const criteria = await LessonsMaterialsService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = LessonsMaterialsController;