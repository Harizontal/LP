const SubscriptionService = require('../services/subscriptionService');

class SubscriptionController {
  static async getAll(req, res) {
    try {
      const criteria = await SubscriptionService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = SubscriptionController;