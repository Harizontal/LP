const LessonsModel = require('../models/lessonsModel');

class LessonsService {
  static async getAll() {
    return await LessonsModel.getAll();
  }
}

module.exports = LessonsService;