import Project from './project';

const Storage = class {
  static getList() {
    const list = JSON.parse(localStorage.getItem('list'));
    if (list == null) {
      const defaultProject = [new Project()];
      localStorage.setItem('list', JSON.stringify(defaultProject));
      const defaultList = JSON.parse(localStorage.getItem('list'));
      return defaultList;
    }
    return list;
  }

  static saveProject(project) {
    const projects = Storage.getList();
    projects.push(project);
    localStorage.setItem('list', JSON.stringify(projects));
  }

  static saveTodo(todo) {
    const projects = Storage.getList();
    const project = projects.find(project => project.projectName === todo.category);
    const index = projects.indexOf(project);
    project.list.push(todo);
    projects[index] = project;
    localStorage.setItem('list', JSON.stringify(projects));
  }
};

export { Storage as default };
