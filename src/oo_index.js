// const taskList = new TaskList();

document.addEventListener("DOMContentLoaded", () => {

  // Adds the task to the task list.
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      //add todo item
      let newTask = new Task(document.getElementById("new-task-description").value, document.querySelector("select").value, document.querySelector(".date-due").value);
      newTask.addToPage()

      // add color based on priority
      newTask.addPriorityColor()

      //add delete button
      newTask.addDeleteButton()
    });

  //sort button

});

function sortListAlphabetically(ul) {
  var ul = document.getElementById(ul);

  Array.from(ul.getElementsByTagName("LI"))
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => ul.appendChild(li));
}
