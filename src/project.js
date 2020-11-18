const Project = class {
  constructor(projectName = 'default') {
    this.projectName = projectName;
    this.list = [];
  }

  // static categoriez = [];

  static getCategories(projects) {
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

  // add to current list of categories (optional)
  // static addCategory(project) {
  //   Project.categories.push(project.projectName);
  //   return Project.categories;
  // }
};

export { Project as default };
