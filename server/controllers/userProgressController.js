const UserProgressService = require('../services/userProgressService');

class UserProgressController {
  static async getAll(req, res) {
    try {
      const criteria = await UserProgressService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UserProgressController;