import Project from './project';

const content = () => {
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
    projectButton.setAttribute('type', 'submit');

    container.insertBefore(formWrapper, wrapper);
    formWrapper.appendChild(projectForm);
    projectForm.appendChild(projectInput);
    projectForm.appendChild(projectButton);
  };

  const createOption = (selectInput, projects, category = null) => {
    if (category === null) { category = Project.getLastAddedCategory(projects); }
    const option = document.createElement('option');
    option.textContent = category;
    option.setAttribute('value', category);
    selectInput.appendChild(option);
  };

  const todoForm = () => {
    const formWrapper = htmlTags('div', 'todo-form-wrapper', 'todo-form');
    const todoForm = htmlTags('form', 'todo-form', 'form');
    const todoTitleInput = htmlTags('input', 'todo-title-input', 'input');
    todoTitleInput.setAttribute('placeholder', 'Title');
    const todoDescriptionInput = htmlTags('input', 'todo-description-input', 'input');
    todoDescriptionInput.setAttribute('placeholder', 'describe your todo');
    const todoDueDateInput = htmlTags('input', 'todo-duedate-input', 'input');
    todoDueDateInput.setAttribute('placeholder', 'duedate');
    todoDueDateInput.setAttribute('type', 'date');

    const todoLowPriorityInput = htmlTags('input', 'todo-priority-input', 'input');
    const todoLowPriorityLabel = htmlTags('label', 'todo-label', 'low-priority', 'low');
    todoLowPriorityInput.setAttribute('type', 'radio');
    todoLowPriorityInput.setAttribute('value', 'low');
    todoLowPriorityInput.setAttribute('name', 'todo-priority');
    todoLowPriorityInput.setAttribute('checked', true);

    const todoHighPriorityInput = htmlTags('input', 'todo-priority-input', 'input');
    const todoHighPriorityLabel = htmlTags('label', 'todo-label', 'high-priority', 'high');
    todoHighPriorityInput.setAttribute('type', 'radio');
    todoHighPriorityInput.setAttribute('value', 'high');
    todoHighPriorityInput.setAttribute('name', 'todo-priority');

    const todoCategoryInput = htmlTags('select', 'todo-category-input', 'input');
    todoCategoryInput.setAttribute('name', 'category');

    const todoButton = htmlTags('button', 'todo-button', 'button', 'create  todo');

    container.insertBefore(formWrapper, wrapper);
    formWrapper.appendChild(todoForm);
    todoForm.appendChild(todoTitleInput);
    todoForm.appendChild(todoDescriptionInput);
    todoForm.appendChild(todoDueDateInput);
    todoForm.appendChild(todoLowPriorityLabel);
    todoForm.appendChild(todoLowPriorityInput);
    todoForm.appendChild(todoHighPriorityLabel);
    todoForm.appendChild(todoHighPriorityInput);
    todoForm.appendChild(todoCategoryInput);
    todoForm.appendChild(todoButton);
  };

  const mainPage = () => {
    const container = htmlTags('main', 'main', 'main');
    document.body.appendChild(container);
    const navBar = htmlTags('nav', 'nav', 'nav');
    const createProjectBtn = htmlTags('button', 'createProjectBtn', 'navBtn', 'add project');
    const createTodoBtn = htmlTags('button', 'createTodoBtn', 'navBtn', 'add todo');
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
    const projectColumn = document.querySelector('.project-column');
    const projectCard = htmlTags('article', 'project-card');
    const projectHeading = htmlTags('h3', 'project-heading');
    projectHeading.textContent = project.projectName;
    projectCard.appendChild(projectHeading);
    // add heading
    // add delete button

    projectColumn.appendChild(projectCard);
  };

  // create todolist wrapper
  const createListWrapper = (id) => {
    const wrapper = htmlTags('div', id, 'todo-wrapper-hidden');
    const todoColumn = document.querySelector('.todo-column');

    todoColumn.appendChild(wrapper);
  };

  // create unexpanded todo card
  const collapsedTodoCard = (todo) => {
    // const todoColumn = document.querySelector('.todo-column');
    const todoCard = htmlTags('article', '', 'collapsed-todo-card');
    const todoTitle = htmlTags('span', '', `${todo.title}`, todo.title);
    const todoDate = htmlTags('span', '', `${todo.dueDate}`, todo.dueDate);
    todoTitle.setAttribute('data-id', todo.id);
    todoDate.setAttribute('data-id', todo.id);
    todoCard.setAttribute('data-category', todo.category);

    // add delete button
    // const wrapper = htmlTags('div', todo.category, 'todo-wrapper-hidden');
    // const wrapper = document.querySelector(`#${todo.category}`);
    // wrapper.appendChild(todoCard);
    // console.log('hello');
    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDate);
    // todoColumn.appendChild(todoCard);
    return todoCard;
  };

  // create expanded todo card
  const expandedTodoCard = (todo) => {
    // const todoColumn = document.querySelector('.todo-column');
    const todoCard = htmlTags('article', '', 'expanded-todo-card');
    const todoTitle = htmlTags('h3', 'todo-title', `${todo.Title}`, todo.title);
    const todoDescription = htmlTags('h4', 'todo-description', `${todo.description}`, todo.description);
    const todoDate = htmlTags('span', 'todo-date', `${todo.dueDate}`, todo.dueDate);
    const todoPriority = htmlTags('button', 'todo-priority', `${todo.priority}`, todo.priority);
    const todoCompleted = htmlTags('button', 'todo-priority', `${todo.completed}`, todo.completed);
    // add delete button
    // const wrapper = document.querySelector(`#${todo.category}`);
    // wrapper.appendChild(todoCard);

    todoTitle.setAttribute('data-id', todo.id);
    todoCard.setAttribute('data-category', todo.category);
    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDescription);
    todoCard.appendChild(todoDate);
    todoCard.appendChild(todoPriority);
    todoCard.appendChild(todoCompleted);
    // todoColumn.appendChild(todoCard);
    return todoCard;
  };

  return {
    mainPage,
    projectForm,
    todoForm,
    createProjectCard,
    collapsedTodoCard,
    expandedTodoCard,
    createListWrapper,
    createOption,
  };
};

export { content as default };
