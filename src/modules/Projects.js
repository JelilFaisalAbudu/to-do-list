class Project {
  constructor(title) {
    this.title = title;
    this.toDoList = [];
  }

  getTitle() {
    return this.title;
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
