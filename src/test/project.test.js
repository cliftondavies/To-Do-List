import Project from '../project';

test('project is a new valid object', () => {
  const project = new Project('default', []);
  expect(project.projectName).toBe('default');
  expect(project.list).toMatchObject([]);
});