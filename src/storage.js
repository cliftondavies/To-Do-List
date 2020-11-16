import Project from './project';

const Storage = class {
  static getList() {
    if (JSON.parse(localStorage.getItem('list'))) {
      JSON.parse(localStorage.getItem('list'));
    } else {
      const defaultProject = [new Project()];
      localStorage.setItem('list', JSON.stringify(defaultProject));
      JSON.parse(localStorage.getItem('list'));
    }
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
    project.list.push(todo);
    const index = projects.indexOf(project);
    projects[index] = project;
    localStorage.setItem('list', JSON.stringify(projects));
  }
};

export { Storage as default };

// retrieve todo list (maybe pass a particular category)


// save todo to the storage
// const saveTodo = () => {
//   const title =
//   const
//   const id = Todo.incrementId;
//   const todo = new Todo()

//   const list = localStorage.getItem
//   const getProject = list.find(where category of project is ==)
//   getProject.list.push(todo)
//   list.push(getProject)
//   localStorage.setItem('', '')
// }

// remove todo from the storage

// remove project

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
