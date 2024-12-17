const LessonsMaterialsModel = require('../models/lessonsMaterialsModel');

class LessonsMaterialsService {
  static async getAll() {
    return await LessonsMaterialsModel.getAll();
  }
}

module.exports = LessonsMaterialsService;