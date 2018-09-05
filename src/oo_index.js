//Step 1. select the form from the page

const form = document.querySelector("#create-task-form")


// Step 2. add eventListener for when we submit the form
// we create a todo form

form.addEventListener("submit", (event) => {
  // the default action of a form is to refresh so we need to prevent that and print the new task on the todoList
    event.preventDefault()
    // when we submit a new task we actually frigger the createTodo() function
    createTodo()
})


//Step 3. create a function to create a new todo item
//the function is triggered after each form is submit

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
