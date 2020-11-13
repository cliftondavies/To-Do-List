import htmlTags from './htmlTags';


const DOM = () => {
  const container = document.getElementById('main');
  const wrapper = document.getElementById('wrapper');

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
    const projectColumn = htmlTags('section', 'project-column', 'column', 'project column');
    const todoColumn = htmlTags('section', 'todo-column', 'column', 'todo clmn');
    container.appendChild(wrapper);
    wrapper.appendChild(projectColumn);
    wrapper.appendChild(todoColumn);
  };

  return { mainPage, projectForm, todoForm };
};

export { DOM as default };