const AnswersService = require('../services/answersService');

class AnswersController {
  static async getAll(req, res) {
    try {
      const taskId = req.query.id_task;
      const criteria = await AnswersService.getAll(taskId);
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = AnswersController;