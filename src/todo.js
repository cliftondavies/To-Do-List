const Todo = class {
  constructor(title, description, dueDate, priority, category, generateID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; // implement dropdown with low or high priority
    this.category = category;
    this.completed = 'Incomplete'; // implement dropdown with complete or incomplete
    this.id = generateID();
  }

  static numberOfTodos = 0 // to implement otherwise might be a problem when refreshed

  static incrementId() {
    return Todo.numberOfTodos + 1;
  }

  // toggleCompleteStatus(){}
  updateStatus() {
    this.completed = (this.completed === 'Complete') ? 'Incomplete' : 'Complete';
  }

  // changePriority(){}
  updatePriority() {
    this.priority = (this.priority === 'Low') ? 'High' : 'Low';
  }
};

export { Todo as default };
