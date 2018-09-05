
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  window.taskList = taskList

  document.getElementById('create-task-form').addEventListener('submit', function(event) {
    event.preventDefault()
    taskList.addTask()
    document.getElementById('new-task-description').value = ""
    })

});
