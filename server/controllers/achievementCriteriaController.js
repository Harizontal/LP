const AchievementCriteriaService = require('../services/achievementCriteriaService');

class AchievementCriteriaController {
  static async getAll(req, res) {
    try {
      const criteria = await AchievementCriteriaService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = AchievementCriteriaController;