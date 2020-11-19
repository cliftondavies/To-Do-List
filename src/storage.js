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

  // save project
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

  // static save(obj) {
  //   const projects = Storage.getList();

  //   if (obj instanceof Project) {
  //     projects.push(obj);
  //   } else {
  //     const project = projects.find(project => project.projectName === obj.category);
  //     const index = projects.indexOf(project);
  //     project.addTodo(obj);
  //     projects[index] = project;
  //   }

  //   localStorage.setItem('list', JSON.stringify(projects));
  // }

  // remove project
  static removeProject(projects, index) {
    projects.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(projects));
  }

  static removeTodo() {

  }
  // remove todo from the storage (here or in todo)
};

export { Storage as default };
