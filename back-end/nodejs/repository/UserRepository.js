const jsonData = require('./users.json')
class UserRepository {
  constructor () {
    this.jsonData = jsonData
  }

  GetAll () {
    return this.jsonData
  }

  GetByID (id) {
    return this.jsonData.find(x => x.id === id)
  }

  DeleteById (id) {
    this.jsonData = this.jsonData.filter(x => x.id !== id)
  }
}

module.exports = UserRepository
