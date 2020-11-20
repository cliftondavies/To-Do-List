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
        const formattedProject = project.projectName.split(' ').join('-');
        content().createListWrapper(formattedProject);
        const wrapper = document.querySelector(`#${formattedProject}`);

        project.list.forEach(todo => {
          wrapper.appendChild(content().collapsedTodoCard(todo));
          wrapper.appendChild(content().expandedTodoCard(todo));
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

    Storage.saveProject(project);
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
    const todoPriority = document.querySelector('input[name="todo-priority"]:checked').value;
    const todoCategory = document.querySelector('#todo-category-input').value;

    const todo = new Todo(todoTitle,
      todoDescription,
      todoDueDate,
      todoPriority,
      todoCategory);

    Storage.saveTodo(todo);
    content().collapsedTodoCard(todo);
    event.preventDefault();
  }

  // show list of todos within a given project
  static showProjectList(heading) {
    heading = heading.toLowerCase().split(' ').join('-');
    const todosWrapper = document.querySelector(`#${heading}`); // heading.toLowerCase().split(' ').join('-');
    todosWrapper.classList.toggle('show-todo-wrapper');
  }

  // expand todo
  static expandTodo(dataID) {
    const collapsedTodoCard = document.querySelector(`span[data-id="${dataID}"]`);

    collapsedTodoCard.parentNode.classList.toggle('expanded-todo-card');
    collapsedTodoCard.parentNode.nextSibling.classList.toggle('show-todo-card');
  }

  // edit todo: updat status and priority, and delete
  static editTodo(target) {
    const projects = Storage.getList();
    const todoID = target.dataset.id;
    const todoCategory = target.dataset.category;
    // console.log(todoID);
    // console.log(todoCategory);

    const project = projects.find(project => project.projectName === todoCategory);
    const projectIndex = projects.indexOf(project);
    // console.log(project);
    // project.prototype = Object.create(Project.prototype);
    // project.prototype.constructor = Project;
    const todo = project.list.find(todo => todo.id === todoID);
    // todo.prototype = Object.create(Todo.prototype);
    // todo.prototype.constructor = Todo;
    // console.log(todo);
    const todoIndex = project.list.indexOf(todo);
    // console.log(todoIndex);

    if (target.textContent === 'Complete') {
      target.textContent = 'Incomplete';
      todo.completed = 'Incomplete';
      project.list[todoIndex] = todo; // re-save modified todo to project list
    } else if (target.textContent === 'Incomplete') {
      target.textContent = 'Complete';
      todo.completed = 'Complete';
      project.list[todoIndex] = todo; // re-save modified todo to project list

    } else if (target.textContent === 'High') {
      target.textContent = 'Low';
      todo.priority = 'Low';
      project.list[todoIndex] = todo; // re-save modified todo to project list

    } else if (target.textContent === 'Low') {
      target.textContent = 'High';
      todo.priority = 'High';
      project.list[todoIndex] = todo; // re-save modified todo to project list
    } else if (target.textContent === 'Delete') {
      // project.deleteTodo(todo);
      // const index = project.list.indexOf(todo);
      console.log(todo);
      console.log(todoIndex);

      project.list.splice(todoIndex, 1);
      // const collapsedTodoCard = document.querySelector(`span[data-id="${dataID}"]`);

      target.parentNode.previousSibling.remove();
      target.parentNode.remove();
    }

    projects[projectIndex] = project;
    localStorage.setItem('list', JSON.stringify(projects));
    // Storage.save(project, projectIndex); // re-save modified project to storage
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
