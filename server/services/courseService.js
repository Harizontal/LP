const CourseModel = require('../models/courseModel');

class CourseService {
  static async getAll(id_language) {
    return await CourseModel.getAll(id_language);
  }
}

module.exports = CourseService;