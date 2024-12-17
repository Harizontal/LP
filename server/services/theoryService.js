const TheoryModel = require('../models/theoryModel');

class TheoryService {
  static async getAll(lesson_id) {
    return await TheoryModel.getAll(lesson_id);
  }
}

module.exports = TheoryService;