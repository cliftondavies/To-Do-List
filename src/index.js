import './assets/css/style.css';
import content from './content';
import UI from './ui';

content().mainPage();
content().todoForm();
content().projectForm();


const projectFormBtn = document.querySelector('#createProjectBtn');
const todoFormBtn = document.querySelector('#createTodoBtn');
const projectBtn = document.querySelector('#project-form');
const todoBtn = document.querySelector('#todo-form');

projectFormBtn.addEventListener('click', UI.viewProjectForm);
todoFormBtn.addEventListener('click', UI.viewTodoForm);
projectBtn.addEventListener('submit', UI.newCategory);
todoBtn.addEventListener('submit', UI.newTodo);
