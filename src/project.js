const Project = class {
  constructor(projectName = 'default') {
    this.projectName = projectName;
    this.list = [];
  }

  addTodoToProject(todo) {
    return this.list.push(todo);
  }

  // removeTodoFromProject(todo){
  //   return this.list.remove(todo);
  // }

  // display list of categories //optional

  // find a method to delete todos from projects

};