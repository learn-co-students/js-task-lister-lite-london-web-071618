
// document.addEventListener("DOMContentLoaded", () => {
//   // const taskList = new TaskList();
// });

const form = document.querySelector("#create-task-form")

function createTodo() {
  const todosList = document.querySelector("#tasks")
	const todo = document.createElement("li")
	const input = document.querySelector("#new-task-description")
	todo.innerText = input.value
	todosList.append(todo)
  todo.addEventListener("click", event => {
    todo.remove()
  })
}

form.addEventListener("submit", (event) => {
	event.preventDefault()
	createTodo()
})
