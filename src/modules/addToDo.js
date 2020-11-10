class Todo {
  constructor(title, desc, dueDate, priority, completed = false) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

export default Todo;