// import htmlTags from './htmlTags';

const DOM = () => {
  const container = document.getElementById('main');
  const wrapper = document.getElementById('wrapper');

  const htmlTags = (tag, id = undefined, klass, textContent) => {
    const htmlElement = document.createElement(`${tag}`);
    if (id) {
      htmlElement.id = id;
    }
    htmlElement.className += `${klass}`;
    htmlElement.textContent = textContent;
    return htmlElement;
  };

  const projectForm = () => {
    const formWrapper = htmlTags('div', 'project-form-wrapper', 'project-form');
    const projectForm = htmlTags('form', 'project-form', 'form');
    const projectInput = htmlTags('input', 'project-input', 'input');
    const projectButton = htmlTags('button', 'project-button', 'button', 'create project');

    container.insertBefore(formWrapper, wrapper);
    formWrapper.appendChild(projectForm);
    projectForm.appendChild(projectInput);
    projectForm.appendChild(projectButton);
  };

  const todoForm = () => {
    const formWrapper = htmlTags('div', 'todo-form-wrapper', 'todo-form');
    const todoForm = htmlTags('form', 'todo-form', 'form');
    const todoTitleInput = htmlTags('input', 'todo-title-input', 'input');
    const todoDescriptionInput = htmlTags('input', 'todo-description-input', 'input');
    const todoDueDateInput = htmlTags('input', 'todo-duedate-input', 'input');
    const todoPriorityInput = htmlTags('input', 'todo-priority-input', 'input');
    const todoCategoryInput = htmlTags('input', 'todo-category-input', 'input');
    const todoButton = htmlTags('button', 'todo-button', 'button', 'create  todo');

    container.insertBefore(formWrapper, wrapper);
    formWrapper.appendChild(todoForm);
    todoForm.appendChild(todoTitleInput);
    todoForm.appendChild(todoDescriptionInput);
    todoForm.appendChild(todoDueDateInput);
    todoForm.appendChild(todoPriorityInput);
    todoForm.appendChild(todoCategoryInput);
    todoForm.appendChild(todoButton);
  };

  const mainPage = () => {
    const container = htmlTags('main', 'main', 'main');
    document.body.appendChild(container);
    const navBar = htmlTags('nav', 'nav', 'nav');
    const createProjectBtn = htmlTags('button', 'createProjectBtn', 'navBtn', 'create project');
    const createTodoBtn = htmlTags('button', 'createTodoBtn', 'navBtn', 'create todo');
    container.appendChild(navBar);
    navBar.appendChild(createProjectBtn);
    navBar.appendChild(createTodoBtn);
    const wrapper = htmlTags('div', 'wrapper', 'wrapper');
    const projectColumn = htmlTags('section', 'project-column', 'project-column', 'project column');
    const todoColumn = htmlTags('section', 'todo-column', 'todo-column', 'todo column');
    container.appendChild(wrapper);
    wrapper.appendChild(projectColumn);
    wrapper.appendChild(todoColumn);
  };

  // create project card
  const createProjectCard = (project) => {
    const projectColumn = document.querySelector('.projet-column');
    const projectCard = htmlTags('article', 'project-card', `${project.projectName}`);
    // add heading
    // add delete button

    projectColumn.appendChild(projectCard);
  };

  // create todolist wrapper
  const createListWrapper = (id) => {
    const wrapper = htmlTags('div', id, 'todo-wrapper-hidden', 'hidden');
    const todoColumn = document.querySelector('.todo-column');

    todoColumn.appendChild(wrapper);
  };

  // create unexpanded todo card
  const collapsedTodoCard = (todo) => {
    const todoColumn = document.querySelector('.todo-column');
    const todoCard = htmlTags('article', 'collapsed-todo-card', '');
    const todoTitle = htmlTags('span', 'todo-title', `${todo.Title}`);
    const todoDate = htmlTags('span', 'todo-date', `${todo.dueDate}`);
    // add delete button

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDate);
    todoColumn.appendChild(todoCard);
  };

  // create expanded todo card
  const expandedTodoCard = (todo) => {
    const todoColumn = document.querySelector('.todo-column');
    const todoCard = htmlTags('article', 'expanded-todo-card', '');
    const todoTitle = htmlTags('h3', 'todo-title', `${todo.Title}`);
    const todoDescription = htmlTags('h4', 'todo-description', `${todo.description}`);
    const todoDate = htmlTags('span', 'todo-date', `${todo.dueDate}`);
    const todoPriority = htmlTags('button', 'todo-priority', `${todo.priority}`);
    const todoCompleted = htmlTags('button', 'todo-priority', `${todo.completed}`);
    // add delete button

    todoCard.setAttribute('data-id', 'todo.id');
    todoCard.setAttribute('data-category', 'todo.category');
    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDescription);
    todoCard.appendChild(todoDate);
    todoCard.appendChild(todoPriority);
    todoCard.appendChild(todoCompleted);
    todoColumn.appendChild(todoCard);
  };

  return {
    mainPage,
    projectForm,
    todoForm,
    createProjectCard,
    collapsedTodoCard,
    expandedTodoCard,
    createListWrapper,
  };
};

export { DOM as default };
