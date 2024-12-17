const pool = require('../config/dbConfig');

class NotificationsModel {
  static async getAll(userId) {
    const [rows] = await pool.execute('SELECT * FROM notifications WHERE id_user = ?',
        [userId]);
    return rows;
  }
}

module.exports = NotificationsModel;