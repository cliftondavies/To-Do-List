import Todo from '../todo';

test('Todo is a new valid object', () => {
  const todo = new Todo('title', 'description', 10 / 12 / 2020, 'high', 'default', 'Incomplete', Date.now().toString());
  expect(todo.title).toBe('title');
  expect(todo.description).toBe('description');
  expect(todo.dueDate).toBe(10 / 12 / 2020);
  expect(todo.priority).toBe('high');
  expect(todo.category).toBe('default');
  expect(todo.completed).toBe('Incomplete');
  // expect(todo.id).toBe(Date.now().toString());
});