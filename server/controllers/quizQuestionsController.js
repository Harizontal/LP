const QuizQuestionsService = require('../services/quizQuestionsService');

class QuizQuestionsController {
  static async getAll(req, res) {
    try {
      const criteria = await QuizQuestionsService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = QuizQuestionsController;