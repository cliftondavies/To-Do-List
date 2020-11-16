const Project = class {
  constructor(projectName = 'default') {
    this.projectName = projectName;
    this.list = [];
  }

  static categories = [];

  addTodoToProject(todo) {
    return this.list.push(todo);
  }

  // add to current list of categories (optional)
  static addCategory(project) {
    Project.categories.push(project.projectName);
  }
};

export { Project as default };