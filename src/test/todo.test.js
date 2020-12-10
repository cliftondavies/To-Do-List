import Todo from '../todo';

test('Todo is a new valid object', () => {
  const todo = new Todo('title', 'description', 10 / 12 / 2020, 'high', 'default', 'Incomplete', Date.now().toString());
  expect(todo instanceof Todo).toBe(true);
});