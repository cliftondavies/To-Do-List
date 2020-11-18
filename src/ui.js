import Storage from './storage';
import content from './content';
import Project from './project';
import Todo from './todo';

const UI = class {
  // render projects and todos by category // render default project with the whole list in storage
  static render() {
    const list = Storage.getList();
    const categorySelect = document.querySelector('#todo-category-input');

    Project.getAllCategories(list).forEach(c => {
      content().createOption(categorySelect, list, c);
    });

    list.forEach(project => {
      content().createProjectCard(project);

      if (project.list.length > 0) {
        content().createListWrapper(project.projectName);

        project.list.forEach(todo => {
          content().collapsedTodoCard(todo);
          content().expandedTodoCard(todo);
        });
      }
    });
  }

  // view project form
  static viewProjectForm() {
    const projectForm = document.querySelector('#project-form-wrapper');

    projectForm.classList.toggle('show-project-form');
  }

  // view todo form
  static viewTodoForm() {
    const todoForm = document.querySelector('#todo-form-wrapper');

    todoForm.classList.toggle('show-todo-form');
  }

  // create new projects category
  static newCategory(event) {
    const projectInput = document.querySelector('#project-input').value;
    const project = new Project(projectInput);
    const categorySelect = document.querySelector('#todo-category-input');

    Storage.save(project);
    const projects = Storage.getList();
    content().createOption(categorySelect, projects);
    content().createProjectCard(project);
    event.preventDefault();
  }

  // create new todo
  static newTodo(event) {
    const todoTitle = document.querySelector('#todo-title-input').value;
    const todoDescription = document.querySelector('#todo-description-input').value;
    const todoDueDate = document.querySelector('#todo-duedate-input').value;
    // const todoPriority = document.querySelector('#todo-priority-input').value;
    // const todoCategory = document.querySelector('#todo-category-input').value;

    const todoPriority = document.querySelector('input[name="todo-priority"]:checked').value;
    const todoCategory = document.querySelector('input[name="category"]:checked').value;
    // console.log(event);

    const todo = new Todo(todoTitle,
      todoDescription,
      todoDueDate,
      todoPriority,
      todoCategory, Todo.incrementId);

    Storage.saveTodo(todo);
    content().collapsedTodoCard(todo);
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
      project.list[todoIndex] = todo;
    } else if (target.textContent === 'Delete') {
      project.deleteTodo(todo);
    } else {
      todo.updatePriority();
      project.list[todoIndex] = todo;
    }

    // project.addTodo(todo);
    // project.list[todoIndex] = todo; // no todoIndex if todo has been deleted from project list
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
