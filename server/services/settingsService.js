const SettingsModel = require('../models/settingsModel');

class SettingsService {
  static async getAll() {
    return await SettingsModel.getAll();
  }
}

module.exports = SettingsService;