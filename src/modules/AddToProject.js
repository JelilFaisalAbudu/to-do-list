class Project {
  constructor(title, description) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.toDoList = [];
  }
}

export default Project;
