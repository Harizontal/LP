const NotificationsService = require('../services/notificationsService');

class NotificationsController {
  static async getAll(req, res) {
    try {
      const criteria = await NotificationsService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = NotificationsController;