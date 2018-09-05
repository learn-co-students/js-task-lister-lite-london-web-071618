
class TaskList {
  constructor() {
    this.taskList = []
    this.counter = 0

    this.userEntry = document.getElementById('new-task-description')
    this.list = document.getElementById('list')

  }



  addTask() {
    const id = this.counter++
    const newTask = new Task(this.userEntry.value, id)

    this.taskList.push(newTask)
    this.list.appendChild(newTask.render())
  }

  removeTask(id) {
    const foundTask = this.taskList.find(task => task.id === id)
    foundTask.delete()
    this.taskList = this.taskList.filter(task => task !== foundTask)
  }


}
