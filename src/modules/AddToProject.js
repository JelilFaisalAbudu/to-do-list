class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.toDoList = [];
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  removeToDo(index) {
    this.toDoList.splice(index, 1);
  }

  getToDoList() {
    return this.toDoList;
  }

  addToDo(toDo) {
    this.toDoList.push(toDo);
  }
}

export default Project;
