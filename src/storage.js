import Project from './project';

const Storage = class {
  static getList() {
    const list = JSON.parse(localStorage.getItem('list'));
    if (list == null) {
      const defaultProject = [new Project()];
      localStorage.setItem('list', JSON.stringify(defaultProject));
      const defaultList = JSON.parse(localStorage.getItem('list'));
      return defaultList;
      // return list;
    }
    return list;
  }

  // save project
  static saveProject(project) {
    const projects = Storage.getList();
    projects.push(project);
    localStorage.setItem('list', JSON.stringify(projects));
  }

  // static saveTodo(todo) {
  //   const projects = Storage.getList();
  //   const project = projects.find(project => project.projectName === todo.category);
  //   project.list.push(todo);
  //   const index = projects.indexOf(project);
  //   projects[index] = project;
  //   localStorage.setItem('list', JSON.stringify(projects));
  // }

  static save(obj) {
    const projects = Storage.getList();

    if (obj instanceof Project) {
      projects.push(obj);
    } else {
      const project = projects.find(project => project.projectName === obj.category);
      const index = projects.indexOf(project);
      project.addTodo(obj);
      projects[index] = project;
    }

    localStorage.setItem('list', JSON.stringify(projects));
  }

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


// const todolist = [
//   {
//     title: 'work',
//     list_of_todos: [{
//       title: 'todo-title1',
//       description: 'todo description1',
//       dueDate: 'todo due date',
//       priority: 'todo-priority',
//     },
//     {
//       title: 'todo-title2',
//       description: 'todo description2',
//       dueDate: 'todo due date',
//       priority: 'todo-priority',
//     }],
//   },
//   {
//     title: 'shopping',
//     list_of_todos: [{
//       title: 'todo-title',
//       description: 'todo description',
//       dueDate: 'todo due date',
//       priority: 'todo-priority',
//     },
//     {
//       title: 'todo-title',
//       description: 'todo description',
//       dueDate: 'todo due date',
//       priority: 'todo-priority',
//     }],
//   },
// ];
