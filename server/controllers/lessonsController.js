const LessonsService = require('../services/lessonsService');

class LessonsController {
  static async getAll(req, res) {
    try {
      const criteria = await LessonsService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = LessonsController;