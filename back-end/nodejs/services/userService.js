const UserRepository = require('../repository/UserRepository')

class UserService {
  constructor () {
    this.userRepository = new UserRepository()
  }

  GetAll () {
    return this.userRepository.GetAll()
  }

  GetByID (id) {
    return this.userRepository.GetByID(id)
  }

  DeleteByID (id) {
    this.userRepository.DeleteById(id)
  }
}

module.exports = UserService
