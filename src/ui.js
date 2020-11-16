// render projects and todos by category
// render default project with the whole list in storage
import Storage from './storage';
import DOM from './DOM';
import Project from './project';
import Todo from './todo';

const UI = class {
  static render() {
    const list = Storage.getList();
    list.forEach(project => {
      DOM.createProjectCard(project);
      DOM.createListWrapper(project.projectName);
      project.list.forEach(todo => DOM.collapsedTodoCard(todo));
    });
  }
  // create new projects category

  static newCategory() {
    const projectInput = document.querySelector('project-input').value;
    const project = new Project(projectInput);
    Storage.save(project);
  }
  // create new todo

  static newTodo() {
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
    Storage.save(todo);

  }
};


export { UI as default };


// expand todo

// set todo as complete

// change priority

// view todo form

// view project form

// delete project

// delete todo
