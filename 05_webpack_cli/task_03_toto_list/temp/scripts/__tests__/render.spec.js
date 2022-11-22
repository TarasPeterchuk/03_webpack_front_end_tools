import { compareTasks } from '../render';
const task1 = {
  text: 'Task 5',
  done: true,
  createDate: '2022-11-16T10:32:51.841Z',
  finishDate: '2022-11-21T09:53:32.685Z',
  _id: '2'
};
const task2 = {
  text: 'aaaaa',
  done: false,
  createDate: '2022-11-21T09:38:58.128Z',
  finishDate: null,
  _id: '3'
};
it('should seturn sorting order', () => {
  const compare = compareTasks(task1.done, task2.done);
  expect(compare).toEqual();
});