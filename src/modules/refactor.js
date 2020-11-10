import Project from './modules/project';
import Todo from './modules/todo';

const projectListContainer = document.querySelector('.project-list');
const newProjectForm = document.querySelector('.new-project-form')
const newTodoForm = document.getElementById('newTodoForm');
const newProjectTitleInput = document.querySelector('.new-project-title-input');
const deleteListButton = document.getElementById('deleteProjectButton');
const toDoListDisplayContainer = document.getElementById('toDoListDisplayContainer');
const toDoTemplate = document.getElementById('toDoTemplate')
const toDoTasksContainer = toDoListDisplayContainer.querySelector('.to-do-tasks-container');
const toDoTitleElement = toDoListDisplayContainer.querySelector('.to-do-title');
const toDosCountElement = toDoListDisplayContainer.querySelector('.to-dos-count');

const LOCAL_STORAGE_PROJECTS_KEY = 'todo.list';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) ||[];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

projectListContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProjectId = e.target.dataset.listId;
    saveAndRender();
  }
});

deleteListButton.addEventListener('click', () => {
  const listItem = projectList.filter(item => {
    return item.id === selectedProjectId;
  });
  projectList.splice(projectList.indexOf(listItem), 1);
  selectedProjectId = null;
  saveAndRender()
});

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projectList));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
};

const renderProjects = () => {
  projectList.forEach(project => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-item');
    listElement.dataset.listId = project.id;
    listElement.innerText = project.title;
    if (project.id === selectedProjectId) {
      listElement.classList.add('active-list-item');
    }
    projectListContainer.appendChild(listElement);
  });
};

const renderToDosCountFor = (selectedProject) => {
  const incompleteToDosCount = selectedProject.toDoList.filter(todo => {
    return !todo.complete;
  }).length;
  const taskString = incompleteToDosCount === 1 ? 'task' : 'tasks';
  toDosCountElement.innerText = `${incompleteToDosCount} ${taskString} remaining`;
};

const render = () => {
  clearElement(projectListContainer);
  renderProjects();
  const selectedProject = projectList.find(project => {
    return project.id === selectedProjectId;
  });

  if (selectedProjectId === null) {
    toDoListDisplayContainer.classList.add('hide');
  }
  else {
    toDoListDisplayContainer.classList.remove('hide');
    toDoTitleElement.innerText = selectedProject.title;
    renderToDosCountFor(selectedProject);
    clearElement(toDoListDisplayContainer);
    renderToDoListFor(selectedProject);
  }
};

const renderToDoListFor = (selectedProjectId) => {
  selectedProjectId.toDoList.forEach(todo => {
    const toDoElement = document.importNode(toDoTemplate.content, true);
    const descriptionElement = toDoElement.querySelector('.description');
    descriptionElement.innerText = todo.desc;

    const dueDateElement = toDoElement.querySelector('.due-date');
    dueDateElement.innerText = todo.dueDate;

    const priorityElement = toDoElement.querySelector('.priority');
    priorityElement.innerText = todo.priority;


    const checkbox = toDoElement.querySelector('.checkbox');
    // checkbox.id = todo.id;
    checkbox.checked = todo.complete;

    const label = toDoElement.querySelector('label');
    label.htmlFor = todo.id;
    label.append(todo.title);
    toDoListDisplayContainer.appendChild(toDoElement);

  });
};

const saveAndRender = () => {
  save();
  render();
};


newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectTitle = newProjectTitleInput.value;

  if (projectTitle === null || projectTitle === '') {
    return;
  }
  const newProject = createProject(projectTitle); 
  newProjectTitleInput.value = null;
  projectList.push(newProject);
  saveAndRender();
});

newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!selectedProjectId) return;
  const todoTitle = newTodoForm.querySelector('#todoTitle').value;
  const todoDesc = newTodoForm.querySelector('#todoDesc').value;
  const todoDueDate = newTodoForm.querySelector('#todoDueDate').value;
  const todoPriority = newTodoForm.querySelector('#todoPriority').value;
  const newTodo = new Todo(todoTitle, todoDesc, todoDueDate, todoPriority)
  const selectedProject = projectList.find(project => {
    return project.id === selectedProjectId
  });
  selectedProject.toDoList.push(newTodo);
  saveAndRender();
  newTodoForm.reset();
});

const createProject = (title) => {
  return new Project(title);
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
};

render();