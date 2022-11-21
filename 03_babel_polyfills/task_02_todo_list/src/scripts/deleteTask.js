import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = event => {
  const isDeleteButton = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteButton) {
    return;
  }
  const taskId = event.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
