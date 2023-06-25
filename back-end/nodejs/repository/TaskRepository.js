const jsonData = require('./tasks.json')
class TaskRepository {
  constructor () {
    this.jsonData = jsonData
  }

  GetAll (idUSer) {
    return jsonData.filter(x => x.id_user === idUSer)
  }

  GetById (idTask) {
    return this.jsonData
  }

  DeleteById (id) {
    this.jsonData = this.jsonData.filter(x => x.id !== id)
  }
}

module.exports = TaskRepository
