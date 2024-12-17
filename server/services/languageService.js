const LanguageModel = require('../models/languageModel');

class LanguageService {
  static async getAll() {
    return await LanguageModel.getAll();
  }
}

module.exports = LanguageService;