import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

export const onListClick = (event) => {
  const isDeleteButton = event.target.classList.contains(
    'list-item__delete-btn',
  );
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
