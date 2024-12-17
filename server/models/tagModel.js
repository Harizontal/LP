const pool = require('../config/dbConfig');

class TagModel {
  static async getAll() {
    const [rows] = await pool.execute('SELECT * FROM tags');
    return rows;
  }
}

module.exports = TagModel;