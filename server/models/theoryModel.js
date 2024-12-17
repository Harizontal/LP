const pool = require('../config/dbConfig');

class TheoryModel {
  static async getAll(languageId) {
    const [rows] = await pool.execute("SELECT * FROM theorysections WHERE id_lesson = ?",
        [languageId]);
    return rows;
  }
}

module.exports = TheoryModel;