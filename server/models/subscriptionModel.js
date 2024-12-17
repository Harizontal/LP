const pool = require('../config/dbConfig');

class SubscriptionModel {
  static async getAll(userId) {
    const [rows] = await pool.execute('SELECT * FROM subscriptions WHERE id_user = ?',
        [userId]);
    return rows;
  }
}

module.exports = SubscriptionModel;