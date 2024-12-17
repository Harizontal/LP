const UserQuizResultModel = require('../models/userQuizResultModel');

class UserQuizResultService {
  static async getAll() {
    return await UserQuizResultModel.getAll();
  }
}

module.exports = UserQuizResultService;