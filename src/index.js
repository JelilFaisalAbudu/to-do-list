import './index.scss';
import {
  saveAndRender,
  render,
  myVar,
} from './modules/todoLogics';
import Project from './modules/AddToProject';
import Todo from './modules/addToDo';
import './modules/common';

const createProject = (title) => new Project(title);

myVar.projectListContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    myVar.selectedProjectId = e.target.dataset.listId;
    saveAndRender();
  }
});

myVar.deleteListButton.addEventListener('click', () => {
  const listItem = myVar.projectList.filter(item => item.id === myVar.selectedProjectId);
  myVar.projectList.splice(myVar.projectList.indexOf(listItem), 1);
  myVar.selectedProjectId = null;
  saveAndRender();
});

myVar.newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectTitle = myVar.newProjectTitleInput.value;

  if (projectTitle === null || projectTitle === '') {
    return;
  }
  const newProject = createProject(projectTitle);
  myVar.newProjectTitleInput.value = null;
  myVar.projectList.push(newProject);
  saveAndRender();
});


myVar.newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!myVar.selectedProjectId) return;
  const todoTitle = myVar.newTodoForm.querySelector('#todoTitle').value;
  const todoDesc = myVar.newTodoForm.querySelector('#todoDesc').value;
  const todoDueDate = myVar.newTodoForm.querySelector('#todoDueDate').value;
  const todoPriority = myVar.newTodoForm.querySelector('#todoPriority').value;
  const newTodo = new Todo(todoTitle, todoDesc, todoDueDate, todoPriority);
  const selectedProject = myVar.projectList.find(project => project.id === myVar.selectedProjectId);
  selectedProject.toDoList.push(newTodo);
  saveAndRender();
  myVar.newTodoForm.reset();
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'delete-btn') {
    const details = e.target.closest('details');
    const detailsId = details.id;
    const selectedProject = myVar.projectList
      .find(project => project.id === myVar.selectedProjectId);
    const todo = selectedProject.toDoList.filter(todo => todo.id === detailsId);
    selectedProject.toDoList.splice(selectedProject.toDoList.indexOf(todo), 1);
    saveAndRender();
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'edit-btn') {
    const details = e.target.closest('details');
    const detailsId = details.id;
    const selectedProject = myVar.projectList
      .find(project => project.id === myVar.selectedProjectId);
    const todo = selectedProject.toDoList.find(todo => todo.id === detailsId);
    myVar.editTodoForm.querySelector('#editTodoTitle').value = todo.title;
    myVar.editTodoForm.querySelector('#editTodoDesc').value = todo.description;
    myVar.editTodoForm.querySelector('#editTodoDueDate').value = todo.dueDate;
    myVar.editTodoForm.querySelector('#editTodoPriority').value = todo.priority;

    document.querySelector('#editTodoFormEl').addEventListener('submit', (e) => {
      e.preventDefault();
      const todoTitle = myVar.editTodoForm.querySelector('#editTodoTitle').value;
      const todoDesc = myVar.editTodoForm.querySelector('#editTodoDesc').value;
      const todoDueDate = myVar.editTodoForm.querySelector('#editTodoDueDate').value;
      const todoPriority = myVar.editTodoForm.querySelector('#editTodoPriority').value;
      todo.title = todoTitle;
      todo.description = todoDesc;
      todo.dueDate = todoDueDate;
      todo.priority = todoPriority;
      myVar.editTodoForm.reset();
      saveAndRender();
    });
  }
});

render();