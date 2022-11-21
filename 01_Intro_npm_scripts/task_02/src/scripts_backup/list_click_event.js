// import { renderTasks } from './render.js';
// import { getItem, setItem } from './storage.js';
// import { deleteTask, getTasksList } from './tasksGateway.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';

export const onListClick = event => {
  const isDeleteButton = event.target.classList.contains('list-item__delete-btn');
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isDeleteButton && !isCheckbox) {
    return;
  }
  if (isDeleteButton) {
    onDeleteTask(event);
  }
  if (isCheckbox) {
    onToggleTask(event);
  }
};
