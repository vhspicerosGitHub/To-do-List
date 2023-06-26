const TaskRepository = require('../repository/TaskRepository')

class TaskService {
  constructor () {
    this.taskRepository = new TaskRepository()
  }

  async GetAll (idUser) {
    return this.taskRepository.GetAll(idUser)
  }

  async GetById (idUser) {
    return this.taskRepository.GetById(idUser)
  }
}

module.exports = TaskService
