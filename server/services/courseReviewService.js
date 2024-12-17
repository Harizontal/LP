const CourseReviewModel = require('../models/courseReviewModel');

class CourseReviewService {
  static async getAll() {
    return await CourseReviewModel.getAll();
  }
}

module.exports = CourseReviewService;