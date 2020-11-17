import Storage from './storage';
import content from './content';
import Project from './project';
import Todo from './todo';

const UI = class {
  // render projects and todos by category // render default project with the whole list in storage
  static render() {
    const list = Storage.getList();
    list.forEach(project => {
      content().createProjectCard(project);
      content().createListWrapper(project.projectName);
      project.list.forEach(todo => content().collapsedTodoCard(todo));
    });
  }

  // view project form
  static viewProjectForm() {
    const projectForm = document.querySelector('#project-form-wrapper');

    projectForm.classList.toggle('show-project-form');
  }

  // create new projects category
  static newCategory(event) {
    event.preventDefault();
    // console.log('hello');
    const projectInput = document.querySelector('#project-input').value;
    // const projectInput = 'shopping';
    // console.log(projectInput);
    // const list = Storage.getList();
    console.log(Storage.getList());
    const project = new Project(projectInput);
    console.log(project);
    content().createProjectCard(project);
    Storage.save(project);
  }

  // view todo form
  static viewTodoForm() {
    const todoForm = document.querySelector('#todo-form-wrapper');

    todoForm.classList.toggle('show-todo-form');
  }

  // create new todo
  static newTodo(event) {
    const todoTitle = document.querySelector('todo-title-input').value;
    const todoDescription = document.querySelector('todo-description-input').value;
    const todoDueDate = document.querySelector('todo-date-input').value;
    const todoPriority = document.querySelector('todo-priority-input').value;
    const todoCategory = document.querySelector('todo-category-input').value;
    const todo = new Todo(todoTitle,
      todoDescription,
      todoDueDate,
      todoPriority,
      todoCategory, Todo.incrementId);

    content().collapsedTodoCard(todo);
    Storage.save(todo);
    event.preventDefault();
  }

  // expand todo
  static expandTodo() {
    const collapsedTodoCard = document.querySelector('.collapsed-todo-card');
    const expandedTodoCard = document.querySelector('.expanded-todo-card');

    collapsedTodoCard.classList.toggle('hide-todo-card');
    expandedTodoCard.classList.toggle('show-todo-card');
  }

  // edit todo: updat status and priority, and delete
  static editTodo(target) {
    const projects = Storage.getList();
    const todoID = target.parent.dataset.id;
    const todoCategory = target.parent.dataset.category;
    const project = projects.find(project => project.projectName === todoCategory);
    const index = projects.indexOf(project);
    const todo = project.list.find(todo => todo.id === todoID);
    const todoIndex = project.list.indexOf(todo);

    if (target.textContent === 'Complete' || target.textContent === 'Incompleted') {
      todo.updateStatus();
    } else if (target.textContent === 'Delete') {
      project.deleteTodo(todo);
    } else {
      todo.updatePriority();
    }

    // project.addTodo(todo);
    project.list[todoIndex] = todo;
    projects[index] = project;
    localStorage.setItem('list', JSON.stringify(projects));
  }

  // delete project
  static deleteProject() {
    const projects = Storage.getList();
    const projectCategory = document.querySelector('.project-heading').textContent;
    const project = projects.find(project => project.projectName === projectCategory);
    const index = projects.indexOf(project);

    Storage.removeProject(projects, index);
  }
};

export { UI as default };
