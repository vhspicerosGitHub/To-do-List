const TaskRepository = require('../repository/TaskRepository')

class TaskService {
  constructor () {
    this.taskRepository = new TaskRepository()
  }

  GetAll (idUser) {
    return this.taskRepository.GetAll(idUser)
  }
}

module.exports = TaskService
