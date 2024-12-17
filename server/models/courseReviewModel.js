const pool = require('../config/dbConfig');

class CourseReviewModel {
  static async getAll(courseId) {
    const [rows] = await pool.execute('SELECT * FROM course_reviews WHERE id_course = ?',
        [courseId]);
    return rows;
  }
}

module.exports = CourseReviewModel;