const pool = require('../config/dbConfig');

class QuizQuestionsModel {
  static async getAll(quizId) {
    const [rows] = await pool.execute('SELECT * FROM quiz_questions WHERE id_quiz = ?',
        [quizId]);
    return rows;
  }
}

module.exports = QuizQuestionsModel;