const UserModel = require('../models/userModel');

class UserSerivce {
  static async getAll() {
    return await UserModel.getAll();
  }
}

module.exports = UserSerivce;