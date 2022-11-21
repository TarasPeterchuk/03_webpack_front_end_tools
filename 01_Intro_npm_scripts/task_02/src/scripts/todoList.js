import { onCreateTask } from './createTask.js';
import { onListClick } from './list_click_event.js';
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onListClick);
};
