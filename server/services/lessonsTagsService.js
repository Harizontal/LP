const LessonsTagsModel = require('../models/lessonsTagsModel');

class LessonsTagsService {
  static async getAll() {
    return await LessonsTagsModel.getAll();
  }
}

module.exports = LessonsTagsService;