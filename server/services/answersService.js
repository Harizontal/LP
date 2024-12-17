const AnswerModel = require('../models/answerModel');

class AnswerService {
  static async getAll(taskId) {
    return await AnswerModel.getAll(taskId);
  }
}

module.exports = AnswerService;