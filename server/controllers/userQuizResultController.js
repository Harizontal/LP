const UserQuizResultService = require('../services/userQuizResultService');

class UserQuizResultController {
  static async getAll(req, res) {
    try {
      const criteria = await UserQuizResultService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UserQuizResultController;