const Todo = class {
  constructor(title, description, dueDate, priority, category, generateID ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.completed = false;
    this.id = generateID();
  }

  static numberOfTodos = 0

  static incrementId = () => {
    return Todo.numberOfTodos++;
  }

  // toggleCompleteStatus(){}
  const toggleStatus = () => {
    // retrieve whole list
    // find todo project category
    // find the todo
  };

  // changePriority(){}
  const changePriority = () => {
    // retrieve whole list
    // find todo project category
    // find the todo
  };
};
