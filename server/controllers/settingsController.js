const SettingsService = require('../services/settingsService');

class settingsController {
  static async getAll(req, res) {
    try {
      const criteria = await SettingsService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = settingsController;