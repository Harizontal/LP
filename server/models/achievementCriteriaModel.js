const pool = require('../config/dbConfig');

class AchievementCriteriaModel {
  static async getAll() {
    const [rows] = await pool.execute('SELECT * FROM achievement_criteria');
    return rows;
  }
}

module.exports = AchievementCriteriaModel;