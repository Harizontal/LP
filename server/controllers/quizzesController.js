const QuizzesService = require('../services/quizzesService');

class QuizzesController {
  static async getAll(req, res) {
    try {
      const criteria = await QuizzesService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = QuizzesController;