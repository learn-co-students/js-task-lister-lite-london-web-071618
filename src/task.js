const tasks = []
let taskId = 0

class Task {

  constructor(description, priority, dateDue) {
    this.id = ++taskId
    this.description = description
    this.priority = priority
    this.dateDue = dateDue
    tasks.push(this)
  }

  addToPage() {
    let form = document.getElementById("tasks");

    //adds Description of task to list
    let listItem = document.createElement("li");
      listItem.id = `list-item-${this.id}`
      listItem.innerHTML = `${this.description}  <br>Due: ${this.dateDue}` ;

    //adds to page
    form.append(listItem);
  }

  addPriorityColor() {
    //applies colour based on priority
    if(this.priority === "1") {
      document.getElementById(`list-item-${this.id}`).className = "red"
    }
    else if (this.priority === "2") {
      document.getElementById(`list-item-${this.id}`).className = "yellow"
    }
    else if (this.priority === "3") {
      document.getElementById(`list-item-${this.id}`).className = "green"
    }
  }

  addDeleteButton() {
    let listItem = document.getElementById(`list-item-${this.id}`)
    //adds delete button
    let deleteButton = document.createElement("button")
      deleteButton.id = `delete-${this.id}`
      deleteButton.type = "button"
      deleteButton.innerText = "X"
      deleteButton.addEventListener("click",function () {
        listItem.parentNode.removeChild(listItem);
      })
    listItem.append(deleteButton);
  }



}
