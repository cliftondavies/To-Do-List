const Todo = class {
  constructor(title, description, dueDate, priority, category) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.completed = 'Incomplete';
    this.id = Date.now().toString();
  }
};

export { Todo as default };
