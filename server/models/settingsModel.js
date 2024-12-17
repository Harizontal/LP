const pool = require('../config/dbConfig');

class SettingsModel {
  static async getAll(userId) {
    const [rows] = await pool.execute('SELECT * FROM user_settings WHERE id_user = ?',
        [userId]);
    return rows;
  }
}

module.exports = SettingsModel;