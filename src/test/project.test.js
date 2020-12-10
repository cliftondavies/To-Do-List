import Project from '../project';
import Todo from '../todo';


test('project is a new valid object', () => {
  const project = new Project('default', []);
  expect(project.projectName).toBe('default');
  expect(project.list).toMatchObject([]);
});

test('get the latest added category', () => {
  const projects = [{ projectName: 'three' }];
  expect(Project.getLastAddedCategory(projects)).toBe('three');
});

test('get all projects categories', () => {
  const projects = [{ projectName: 'two' }, { projectName: 'three' }];
  expect(Project.getAllCategories(projects)).toStrictEqual(['two', 'three']);
});

test('add todos to project', () => {
  const fakeProject = new Project('fakeProject');
  const fakeTodo = new Todo('fakeTodo', 'description', 12 / 12 / 2020, 'High', 'default', 'Incomplete');
  expect(fakeProject.addTodo(fakeTodo)).toBe(1);
});

test('delete todos from project', () => {
  const fakeProject = new Project('fakeProject');
  const fakeTodo = new Todo('fakeTodo', 'description', 12 / 12 / 2020, 'High', 'default', 'Incomplete');
  fakeProject.addTodo(fakeTodo);
  fakeProject.deleteTodo(fakeTodo);
  expect(fakeProject.list.indexOf(fakeTodo)).toBe(-1);
});