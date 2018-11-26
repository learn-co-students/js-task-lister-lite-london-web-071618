
document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector('#create-task-form')
const todoList = document.querySelector("#tasks")

form.addEventListener("submit", event => {
  event.preventDefault()
  createTodo()
  event.target.reset()

})


function createTodo() {
  const todoEl = document.createElement("li")
  const input = document.querySelector("#new-task-description")
  todoEl.innerText = input.value
  todoList.append(todoEl)

  todoEl.addEventListener("click", event => {
    todoEl.remove()
  })
}

});
