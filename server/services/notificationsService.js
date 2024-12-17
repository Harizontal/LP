const NotificationsModel = require('../models/notificationsModel');

class NotificationsService {
  static async getAll() {
    return await NotificationsModel.getAll();
  }
}

module.exports = NotificationsService;