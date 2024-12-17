const QuizzesModel = require('../models/quizzesModel');

class QuizzesService {
  static async getAll() {
    return await QuizzesModel.getAll();
  }
}

module.exports = QuizzesService;