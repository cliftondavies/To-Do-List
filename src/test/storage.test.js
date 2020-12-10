import Project from '../project';
import Storage from '../storage';

test('Local storage get list', () => {
  const getList = Storage.getList();
  expect(getList).toMatchObject([new Project()]);
});

test('Local storage save projects', () => {
  expect(Storage.saveProject('test project', 'default')).toBe(localStorage.setItem('list', JSON.stringify('test project')));
});

test('Local storage save todos', () => {
  const projects = Storage.getList();
  const project = 'default';
  const index = projects.indexOf(project);
  project.list.push('todo');
  projects[index] = project;
  expect(Storage.saveTodo('todo')).toBe(localStorage.setItem('list', JSON.stringify('todo')));
});

test('Local storage can delete projects', () => {
  const projects = ['default', 'todo'];
  expect(Storage.removeProject('default', 1)).toBe(
    projects.splice(1, 1),
    localStorage.setItem('list', JSON.stringify(projects)))
})