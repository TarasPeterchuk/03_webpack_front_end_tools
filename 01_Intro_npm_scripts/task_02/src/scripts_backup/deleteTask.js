import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = event => {
  const isDeleteButton = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteButton) {
    return;
  }
  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  // const { text, createDate } = tasksList.find(task => task.id === taskId);
  // const done = event.target.checked;

  // const updatedTask = {
  //   text,
  //   createDate,
  //   done,
  //   finishDate: done ? new Date().toISOString() : null,
  // };

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
