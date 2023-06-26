const database = require('../utils/db')

class TaskRepository {
  constructor () {
    this.db = database
    this.tasksdb = database.collection('users')
  }

  async GetAll (idUSer) {
    return await this.tasksdb.find({ id_user: idUSer })
  }

  async GetById (idTask) {
    return await this.tasksdb.find({ id: idTask })
  }

  async DeleteById (id) {
    await this.tasksdb.deleteOne(id)
  }
}

module.exports = TaskRepository
