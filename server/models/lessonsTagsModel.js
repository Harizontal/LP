const pool = require('../config/dbConfig');

class LessonsTagsModel {
  static async getAll(lessonId) {
    const [rows] = await pool.execute('SELECT * FROM lesson_tags WHERE id_lesson = ?',
        [lessonId]);
    return rows;
  }
}

module.exports = LessonsTagsModel;