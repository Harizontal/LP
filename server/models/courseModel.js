const pool = require('../config/dbConfig');

class CourseModel {
  static async getAll(id_language) {
    const [rows] = await pool.execute("SELECT * FROM courses WHERE id_language = ?", [id_language]);
    return rows;
  }
}

module.exports = CourseModel;