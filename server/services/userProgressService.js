const UserProgressModel = require('../models/userProgressModel');

class UserProgressService {
  static async getAll() {
    return await UserProgressModel.getAll();
  }
}

module.exports = UserProgressService;