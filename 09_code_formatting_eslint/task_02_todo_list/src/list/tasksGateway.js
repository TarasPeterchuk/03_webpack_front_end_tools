const baseUrl = 'https://6374b55948dfab73a4e65042.mockapi.io/todo_list/tasks/';

const mapTasks = (tasks) => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => mapTasks(tasks));

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});
export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
