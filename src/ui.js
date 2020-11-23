import Storage from './storage';
import content from './content';
import Project from './project';
import Todo from './todo';

const UI = class {
  static render() {
    const projects = Storage.getList();
    const categorySelect = document.querySelector('#todo-category-input');

    Project.getAllCategories(projects).forEach(c => {
      content().createOption(categorySelect, projects, c);
    });

    projects.forEach(project => {
      content().createProjectCard(project);
      const formattedProject = project.projectName.split(' ').join('-');
      content().createListWrapper(formattedProject);
      const wrapper = document.querySelector(`#${formattedProject}`);

      if (project.list.length > 0) {
        project.list.forEach(todo => {
          wrapper.appendChild(content().collapsedTodoCard(todo));
          wrapper.appendChild(content().expandedTodoCard(todo));
        });
      }
    });
  }

  static viewProjectForm() {
    const projectForm = document.querySelector('#project-form-wrapper');

    projectForm.classList.toggle('show-project-form');
  }

  static viewTodoForm() {
    const todoForm = document.querySelector('#todo-form-wrapper');

    todoForm.classList.toggle('show-todo-form');
  }

  static clearProjectFields() {
    const projectInput = document.querySelector('#project-input').value;
    projectInput.value = '';
    projectInput.classList.toggle('show-project-form');
  }

  static clearTodoFields() {
    const todoTitle = document.querySelector('#todo-title-input').value;
    todoTitle.value = '';
    const todoDescription = document.querySelector('#todo-description-input').value;
    todoDescription.value = '';
    const todoDueDate = document.querySelector('#todo-duedate-input').value;
    todoDueDate.value = '';
    const todoPriority = document.querySelector('input[name="todo-priority"]:checked').value;
    todoPriority.value = '';
    const todoCategory = document.querySelector('#todo-category-input').value;
    todoCategory.value = '';
    const todoForm = document.querySelector('#todo-form-wrapper');

    todoForm.classList.toggle('show-todo-form');
  }

  static newCategory(event) {
    const projectInput = document.querySelector('#project-input').value;
    if (!projectInput) {
      alert('Project need a name.');
    } else {
      const project = new Project(projectInput);
      const categorySelect = document.querySelector('#todo-category-input');

      Storage.saveProject(project);
      const projects = Storage.getList();
      content().createOption(categorySelect, projects);
      content().createProjectCard(project);

      const formattedProject = project.projectName.split(' ').join('-');
      content().createListWrapper(formattedProject);
    }
    UI.clearProjectFields();
    event.preventDefault();
  }

  static newTodo(event) {
    const todoTitle = document.querySelector('#todo-title-input').value;
    const todoDescription = document.querySelector('#todo-description-input').value;
    const todoDueDate = document.querySelector('#todo-duedate-input').value;
    const todoPriority = document.querySelector('input[name="todo-priority"]:checked').value;
    const todoCategory = document.querySelector('#todo-category-input').value;
    if (!todoTitle) {
      alert('Todo need at least Title');
    } else {
      const todo = new Todo(todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoCategory);
      Storage.saveTodo(todo);
      const formattedProject = todoCategory.toLowerCase().split(' ').join('-');
      const wrapper = document.querySelector(`#${formattedProject}`);
      wrapper.appendChild(content().collapsedTodoCard(todo));
      wrapper.appendChild(content().expandedTodoCard(todo));
      wrapper.classList.toggle('show-todo-wrapper');
    }
    UI.clearTodoFields();
    event.preventDefault();
  }

  static showProjectList(heading) {
    heading = heading.toLowerCase().split(' ').join('-');
    const todosWrapper = document.querySelector(`#${heading}`);
    const elementsOnShow = document.getElementsByClassName('show-todo-wrapper');

    Array.from(elementsOnShow).forEach(element => { element.classList.toggle('show-todo-wrapper'); });
    if (todosWrapper) { todosWrapper.classList.toggle('show-todo-wrapper'); }
  }

  static expandTodo(dataID) {
    const collapsedTodoCard = document.querySelector(`span[data-id="${dataID}"]`);

    if (collapsedTodoCard) {
      collapsedTodoCard.parentNode.classList.toggle('expanded-todo-card');
      collapsedTodoCard.parentNode.nextSibling.classList.toggle('show-todo-card');
    }
  }

  static editTodo(target) {
    const projects = Storage.getList();
    const todoID = target.dataset.id;
    const todoCategory = target.dataset.category;
    const project = projects.find(project => project.projectName === todoCategory);
    const projectIndex = projects.indexOf(project);
    const todo = project.list.find(todo => todo.id === todoID);
    const todoIndex = project.list.indexOf(todo);

    if (target.textContent === 'Complete') {
      target.textContent = 'Incomplete';
      todo.completed = 'Incomplete';
      target.parentNode.firstChild.classList.toggle('completed');
      target.parentNode.firstChild.nextSibling.classList.toggle('completed');
      project.list[todoIndex] = todo;
    } else if (target.textContent === 'Incomplete') {
      target.textContent = 'Complete';
      todo.completed = 'Complete';
      target.parentNode.firstChild.classList.toggle('completed');
      target.parentNode.firstChild.nextSibling.classList.toggle('completed');
      project.list[todoIndex] = todo;
    } else if (target.textContent === 'High') {
      target.textContent = 'Low';
      todo.priority = 'Low';
      project.list[todoIndex] = todo;
    } else if (target.textContent === 'Low') {
      target.textContent = 'High';
      todo.priority = 'High';
      project.list[todoIndex] = todo;
    } else if (target.textContent === 'Delete') {
      project.list.splice(todoIndex, 1);
      if (target) { target.parentNode.previousSibling.remove(); }
      if (target) { target.parentNode.remove(); }
    }

    projects[projectIndex] = project;
    localStorage.setItem('list', JSON.stringify(projects));
  }

  static deleteProject() {
    const projects = Storage.getList();
    const projectCategory = document.querySelector('.project-heading').textContent;
    const project = projects.find(project => project.projectName === projectCategory);
    const index = projects.indexOf(project);

    Storage.removeProject(projects, index);
  }
};

export { UI as default };
