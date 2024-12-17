const UserAchievementModel = require('../models/userAchievementModel');

class UserAchievementService {
  static async getAll() {
    return await UserAchievementModel.getAll();
  }
}

module.exports = UserAchievementService;