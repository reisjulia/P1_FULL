const UserModel = require('../models/UserModel');

class UserRepository {
    static async create(userData) {
        return UserModel.create(userData);
    }
    static async findByEmail(email) {
        return UserModel.findOne({ email })
    }
}

module.exports = UserRepository;