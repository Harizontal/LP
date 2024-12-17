const AchievementCriteriaModel = require('../models/achievementCriteriaModel');

class AchievementCriteriaService {
  static async getAll() {
    return await AchievementCriteriaModel.getAll();
  }
}

module.exports = AchievementCriteriaService;