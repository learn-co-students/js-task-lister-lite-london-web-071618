

class Task {
  constructor(description, id) {
    this.id = id
    this.description = description
  }



  render() {
    const listElem = document.createElement('p')
    listElem.innerHTML = `${this.description}<button id="remove" onclick="taskList.removeTask(${this.id})">x</button>`
    this.listElem = listElem
    return listElem
  }

  delete() {
    this.listElem.remove()
  }
}
