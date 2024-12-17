const TaskModel = require('../models/taskModel');

class TaskService {
  static async getAll() {
    return await TaskModel.getAll();
  }
}

module.exports = TaskService;