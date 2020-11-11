import './index.scss';
import { saveAndRender, render, myVar } from './modules/todoLogics';
import Project from './modules/AddToProject';
import Todo from './modules/addToDo';

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
    const selectedToDo = myVar.selectedProject.toDoList.filter((todo) => todo.id === detailsId);
    myVar.selectedProject.toDoList.splice(myVar.selectedProject.toDoList.indexOf(selectedToDo), 1);
    saveAndRender();
  }
});

// document.addEventListener('click', (e) => {
//   if (e.target && e.target.className === 'delete-btn') {
//     e.target.closest('details')
//   }
// });

render();
