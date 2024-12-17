const pool = require('../config/dbConfig');

class QuizzesModel {
  static async getAll() {
    const [rows] = await pool.execute('SELECT * FROM quizzes');
    return rows;
  }
}

module.exports = QuizzesModel;