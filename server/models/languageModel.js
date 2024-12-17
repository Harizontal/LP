const pool = require('../config/dbConfig');

class LanguageModel {
  static async getAll() {
    const [rows] = await pool.execute("SELECT * FROM languages");
    return rows;
  }
}

module.exports = LanguageModel;