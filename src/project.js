const Project = class {
  constructor(projectName = 'default') {
    this.projectName = projectName;
    this.list = [];
  }

  static getLastAddedCategory(projects) {
    return projects[projects.length - 1].projectName;
  }

  static getAllCategories(projects) {
    const categories = [];
    projects.forEach(p => categories.push(p.projectName));
    return categories;
  }

  addTodo(todo) {
    return this.list.push(todo);
  }

  deleteTodo(todo) {
    const index = this.list.indexOf(todo);
    this.list.splice(index, 1);
  }
};

export { Project as default };
