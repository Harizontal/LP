const pool = require('../config/dbConfig');

class UserProgressModel {
  static async getAll(userId) {
    const [rows] = await pool.execute("SELECT * FROM user_progress WHERE id_user = ?",
        [userId]);
    return rows;
  }
}

module.exports = UserProgressModel;