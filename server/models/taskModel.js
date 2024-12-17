const pool = require('../config/dbConfig');

class TaskModel {
  static async getAll() {
    const [rows] = await pool.execute("SELECT * FROM tasks");
    return rows;
  }
}

module.exports = TaskModel;