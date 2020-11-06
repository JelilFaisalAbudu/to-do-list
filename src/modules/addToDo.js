class Todo {
  constructor(title, desc, dueDate, priority, completed = false) {
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  title() {
    return this.title;
  }

  description() {
    return this.description;
  }

  dueDate() {
    return this.dueDate;
  }

  priority() {
    return this.priority;
  }

  completed() {
    return this.completed;
  }

  editTitle(title) {
    this.title = title;
  }

  editDescription(desc) {
    this.description = desc;
  }

  editDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  editPriority(priority) {
    this.priority = priority;
  }

  editCompleted(completed) {
    this.completed = completed;
  }
}

export default Todo;