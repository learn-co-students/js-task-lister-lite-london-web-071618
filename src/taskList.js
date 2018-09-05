const taskLists = []
let taskListId = 0

class TaskList {

  constructor() {
    this.id = ++taskListId
    taskLists.push(this)
  }

}
