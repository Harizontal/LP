const pool = require('../config/dbConfig');

class LessonsModel {
  static async getAll() {
    const [rows] = await pool.execute("SELECT * FROM lessons");
    return rows;
  }
}

module.exports = LessonsModel;