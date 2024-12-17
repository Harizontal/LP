const UserAchievementService = require('../services/userAchievementService');

class UserAchievementController {
  static async getAll(req, res) {
    try {
      const criteria = await UserAchievementService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UserAchievementController;