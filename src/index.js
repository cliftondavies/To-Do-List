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
  // console.log(e.target.textContent);
  UI.showProjectList(e.target.textContent);
  document.addEventListener('DOMContentLoaded', UI.render);
});

todoColumn.addEventListener('click', (e) => {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // const short = e.target.textContent;
  // // console.log((short === 'high' || short === 'low' || short === 'Complete' || short === 'Incomplete'));

  // if (short !== 'High' || short !== 'Low' || short !== 'Complete' || short !== 'Incomplete' || short !== 'Delete') {
  // }
  
  UI.expandTodo(e.target.dataset.id);
});

todoColumn.addEventListener('click', (e) => {
  const short = e.target.textContent;
  // console.log((short === 'high' || short === 'low' || short === 'Complete' || short === 'Incomplete'));

  if (short === 'High' || short === 'Low' || short === 'Complete' || short === 'Incomplete' || short === 'Delete') {
    UI.editTodo(e.target);
  }
  // console.log(short);
  document.addEventListener('DOMContentLoaded', UI.render);
});
