import './index.scss';
import save from './modules/save';
import variables from './modules/variables';
import render from './modules/render';
import Project from './modules/AddToProject';
import Todo from './modules/addToDo';

const newVar = variables();
const createProject = (title) => new Project(title);
const saveAndRender = () => {
  save();
  render(newVar.projectList);
};

newVar.newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectTitle = newVar.newProjectTitleInput.value;

  if (projectTitle === null || projectTitle === '') {
    return;
  }
  const newProject = createProject(projectTitle);
  newVar.newProjectTitleInput.value = null;
  newVar.projectList.push(newProject);
  saveAndRender();
});

newVar.newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!newVar.selectedProjectId) return;
  const todoTitle = newVar.newTodoForm.querySelector('#todoTitle').value;
  const todoDesc = newVar.newTodoForm.querySelector('#todoDesc').value;
  const todoDueDate = newVar.newTodoForm.querySelector('#todoDueDate').value;
  const todoPriority = newVar.newTodoForm.querySelector('#todoPriority').value;
  const newTodo = new Todo(todoTitle, todoDesc, todoDueDate, todoPriority);
  const selectedProject = newVar.projectList
    .find(project => project.id === newVar.selectedProjectId);
  selectedProject.toDoList.push(newTodo);
  saveAndRender();
  newVar.newTodoForm.reset();
});


newVar.projectList.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    newVar.selectedProjectId = e.target.dataset.listId;
    saveAndRender();
  }
});

newVar.deleteListButton.addEventListener('click', () => {
  const listItem = newVar.projectList.filter(item => item.id === newVar.selectedProjectId);
  newVar.projectList.splice(newVar.projectList.indexOf(listItem), 1);
  newVar.selectedProjectId = null;
  saveAndRender();
});


render();