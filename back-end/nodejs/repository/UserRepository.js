const database = require('../utils/db')
const jsonData = require('./users.json')
class UserRepository {
  constructor () {
    this.jsonData = jsonData
    this.db = database
    this.userdb = database.collection('users')
  }

  async GetAll () {
    const users = await this.userdb.find().toArray()
    console.log('users =>', users)
    return users
  }

  async GetByID (id) {
    return await this.userdb.findOne({ id })
  }

  async DeleteById (id) {
    return await this.userdb.deleteOne({ id })
  }
}

module.exports = UserRepository
