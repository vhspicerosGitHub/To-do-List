const UserRepository = require('../repository/UserRepository')

class UserService {
  constructor () {
    this.userRepository = new UserRepository()
  }

  async GetAll () {
    return await this.userRepository.GetAll()
  }

  async GetByID (id) {
    return this.userRepository.GetByID(id)
  }

  async DeleteByID (id) {
    await this.userRepository.DeleteById(id)
  }
}

module.exports = UserService
