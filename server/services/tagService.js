const TagModel = require('../models/tagModel');

class TagService {
  static async getAll() {
    return await TagModel.getAll();
  }
}

module.exports = TagService;