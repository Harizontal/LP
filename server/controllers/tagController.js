const TagService = require('../services/tagService');

class TagController {
  static async getAll(req, res) {
    try {
      const criteria = await TagService.getAll();
      res.json(criteria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = TagController;