const CourseService = require('../services/courseService');

class CourseController {
  static async getAll(req, res) {
    try {
      const id_language = req.query.id_language;
      const criteria = await CourseService.getAll(id_language);
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CourseController;