const CourseReviewService = require('../services/courseReviewService');

class CourseReviewController {
  static async getAll(req, res) {
    try {
      const criteria = await CourseReviewService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CourseReviewController;