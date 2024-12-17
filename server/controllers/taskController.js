const TaskService = require('../services/taskService');

class TaskController {
  static async getAll(req, res) {
    try {
      const criteria = await TaskService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = TaskController;