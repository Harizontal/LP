const QuizQuestionsModel = require('../models/quizQuestionsModel');

class QuizQuestionsService {
  static async getAll() {
    return await QuizQuestionsModel.getAll();
  }
}

module.exports = QuizQuestionsService;