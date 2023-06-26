const database = require('../utils/db')
const jsonData = require('./users.json')
const mongodb = require('mongodb')

class UserRepository {
  constructor () {
    this.jsonData = jsonData
    this.db = database
    this.usersdb = database.collection('users')
  }

  async GetAll () {
    const users = await this.usersdb.find().toArray()
    console.log('users =>', users)
    return users
  }

  async GetByID (id) {
    return await this.usersdb.findOne({ id })
  }

  async DeleteById (id) {
    await this.usersdb.deleteOne({ _id: new mongodb.ObjectId(id) })
  }

  async Create (email) {
    const user = { email }
    console.log(user)
    await this.usersdb.insertOne(user)
  }
}

module.exports = UserRepository
