const LanguageService = require('../services/languageService');

class LanguageController{
  static async getAll(req, res) {
    try {
      const criteria = await LanguageService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = LanguageController;