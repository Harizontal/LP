const pool = require('../config/dbConfig');

class LessonsMaterialsModel {
  static async getAll(lessonId) {
    const [rows] = await pool.execute("SELECT * FROM lesson_materials WHERE id_lesson = ?",
        [lessonId]);
    return rows;
  }
}

module.exports = LessonsMaterialsModel;