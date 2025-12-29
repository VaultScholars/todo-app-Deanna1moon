// dom.js
// In this file, students will write the functions that update the DOM.


// This function does :
// - Clear the current task list
// - Loop through the tasks array
// - Create an <li> for each task using createTaskElement()
// - Add each <li> to the <ul>
// - Show the empty state message when there are no tasks
function renderTasks(tasks, listElement, emptyStateElement) {
  // TODO: Implement rendering logic
   listElement.innerHTML = "";

  // If there are no tasks, show empty state
  if (tasks.length === 0) {
    emptyStateElement.style.display = "block";
    return;
  }

  // Hide empty state if tasks exist
  emptyStateElement.style.display = "none";

  // Loop through tasks and add them to the list
  for (let i = 0; i < tasks.length; i++) {
    const taskItem = createTaskElement(tasks[i]);
    listElement.appendChild(taskItem);
  }

}


// This function :
// - Create and return ONE <li> element following the structure above
// - Contain the checkbox, title, optional meta info, and delete button
// - Add the correct classes to each element
// - Make the checkbox checked if the task is completed
// - NOT add event listeners (app.js will handle that)
function createTaskElement(task) {
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.setAttribute("data-id", task.id);

  
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("task-item-left");

 
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");
  checkbox.checked = task.completed;

  // Main content
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("task-main");

  // Title
  const title = document.createElement("p");
  title.classList.add("task-title");
  title.textContent = task.title;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("task-delete-btn");
  deleteBtn.textContent = "Delete";

  // Build structure
  mainDiv.appendChild(title);
  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(mainDiv);

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  return li;
}



// This function:
// - Reset the form
// - Put focus back on the task title input
function clearTaskForm(form){

  form.reset();

  
  const titleInput = form.querySelector("#task-title");
  titleInput.focus();
}
