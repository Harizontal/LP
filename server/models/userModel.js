const pool = require('../config/dbConfig');

class UserModel {
  static async getAll() {
    const [rows] = await pool.execute("SELECT * FROM users");
    return rows;
  }
}

module.exports = UserModel;