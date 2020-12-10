import Project from '../project';
import Storage from '../storage';
import Todo from '../todo';

test('Local storage get list', () => {
  const getList = Storage.getList();
  expect(getList).toMatchObject([new Project()]);
});

test('Local storage save projects', () => {
  const projects = Storage.getList();
  const fakeProject = new Project('fakeproject');
  projects.push(fakeProject);
  expect(Storage.saveProject(fakeProject)).toBe(localStorage.setItem('list', JSON.stringify(projects)));
});

test('Local storage save todos', () => {
  const fakeTodo = new Todo('fakeTodo', 'description', 12 / 12 / 2020, 'High', 'default', 'Incomplete');
  const projects = Storage.getList();
  expect(Storage.saveTodo(fakeTodo))
    .toBe(localStorage.setItem('list', JSON.stringify(projects)));
});