const pool = require('../config/dbConfig');

class AnswerModel {
  static async getAll(taskId) {
    const [rows] = await pool.execute("SELECT * FROM taskanswers WHERE id_task = ?",
        [taskId]);
    return rows;
  }
}

module.exports = AnswerModel;