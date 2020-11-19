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

  // static getList() { // refactored get list method
  //   if (JSON.parse(localStorage.getItem('list')) === null) {
  //     const defaultProject = [new Project()];
  //     localStorage.setItem('list', JSON.stringify(defaultProject));
  //   }
  //   return JSON.parse(localStorage.getItem('list'));
  // }

  // save project
  static saveProject(project) {
    const projects = Storage.getList();
    projects.push(project);
    localStorage.setItem('list', JSON.stringify(projects));
  }

  // save todo
  static saveTodo(todo) {
    const projects = Storage.getList();
    const project = projects.find(project => project.projectName === todo.category);
    const index = projects.indexOf(project);
    // project.list.push(todo);
    project.addTodo(todo);
    projects[index] = project;
    localStorage.setItem('list', JSON.stringify(projects));
  }

  // save a new project or todo object
  // static save(obj, index = null) {
  //   const projects = this.retrieve();

  //   if (index) { // or project obj && index if any issues
  //     projects[index] = obj;
  //   } else if (obj instanceof Project) { // or project obj && !index if any issues
  //     projects.push(obj);
  //   } else {
  //     const project = projects.find(project => project.projectName === obj.category);
  //     const index = projects.indexOf(project);
  //     project.saveTodo(obj);
  //     projects[index] = project;
  //   }

  //   localStorage.setItem('list', JSON.stringify(projects));
  // }

  // static update(projects, index, project) { // optional update method for an existing project
  //   projects[index] = project;
  //   localStorage.setItem('list', JSON.stringify(projects));
  // }

  // remove project
  static removeProject(projects, index) {
    projects.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(projects));
  }
};

export { Storage as default };
