import './assets/css/style.css';
import content from './content';
import UI from './ui';

document.addEventListener('DOMContentLoaded', UI.render);
content().mainPage();
content().todoForm();
content().projectForm();


const projectFormBtn = document.querySelector('#createProjectBtn');
const todoFormBtn = document.querySelector('#createTodoBtn');
const projectForm = document.querySelector('#project-form');
const todoForm = document.querySelector('#todo-form');
const wrapper = document.querySelector('#project-column');
const todoColumn = document.querySelector('.todo-column');

projectFormBtn.addEventListener('click', UI.viewProjectForm);
todoFormBtn.addEventListener('click', UI.viewTodoForm);
projectForm.addEventListener('submit', UI.newCategory);
todoForm.addEventListener('submit', UI.newTodo);


wrapper.addEventListener('click', (e) => {
  UI.showProjectList(e.target.textContent);
});

todoColumn.addEventListener('click', (e) => {
  const short = e.target.textContent;

  if (short !== 'High' && short !== 'Low' && short !== 'Complete' && short !== 'Incomplete' && short !== 'Delete'
      && short !== null) {
    UI.expandTodo(e.target.dataset.id);
  }
});

todoColumn.addEventListener('click', (e) => {
  const short = e.target.textContent;

  if ((short === 'High' || short === 'Low' || short === 'Complete' || short === 'Incomplete' || short === 'Delete')
  && (e.target !== null)) {
    UI.editTodo(e.target);
  }
});
