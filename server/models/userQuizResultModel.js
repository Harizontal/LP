const pool = require('../config/dbConfig');

class UserQuizResultModel {
  static async getAll(userId) {
    const [rows] = await pool.execute('SELECT * FROM user_quiz_results WHERE id_user = ?',
        [userId]);
    return rows;
  }
}

module.exports = UserQuizResultModel;