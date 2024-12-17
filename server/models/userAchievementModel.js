const pool = require('../config/dbConfig');

class UserAchievementModel {
  static async getAll(userId) {
    const [rows] = await pool.execute('SELECT * FROM user_achievements WHERE id_user = ?',
        [userId]);
    return rows;
  }
}

module.exports = UserAchievementModel;