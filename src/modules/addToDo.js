class Todo {
  constructor(title, desc, dueDate, priority, complete = false) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }
}

export default Todo;