const SubscriptionModel = require('../models/subscriptionModel');

class SubscriptionService {
  static async getAll() {
    return await SubscriptionModel.getAll();
  }
}

module.exports = SubscriptionService;