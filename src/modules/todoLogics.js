import variables from './variables';

const myVar = variables();

const save = () => {
  localStorage.setItem(myVar.LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(myVar.projectList));
  localStorage.setItem(myVar.LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, myVar.selectedProjectId);
};

const renderProjects = () => {
  myVar.projectList.forEach(project => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-item');
    listElement.dataset.listId = project.id;
    listElement.innerText = project.title;
    if (project.id === myVar.selectedProjectId) {
      listElement.classList.add('active-list-item');
    }
    myVar.projectListContainer.appendChild(listElement);
  });
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const renderToDosCountFor = (selectedProject) => {
  const incompleteToDosCount = selectedProject.toDoList.filter(todo => !todo.complete).length;
  const taskString = incompleteToDosCount === 1 ? 'task' : 'tasks';
  myVar.toDosCountElement.innerText = `${incompleteToDosCount} ${taskString} remaining`;
};

const renderToDoListFor = (selectedProjectId) => {
  selectedProjectId.toDoList.forEach(todo => {
    const toDoElement = document.importNode(myVar.toDoTemplate.content, true);
    const detailsElement = toDoElement.querySelector('details');
    detailsElement.id = todo.id;
    const descriptionElement = toDoElement.querySelector('.description');
    descriptionElement.innerText = todo.description;

    const dueDateElement = toDoElement.querySelector('.due-date');
    dueDateElement.innerText = todo.dueDate;

    const priorityElement = toDoElement.querySelector('.priority');
    priorityElement.innerText = todo.priority;


    const checkbox = toDoElement.querySelector('.checkbox');
    checkbox.checked = todo.complete;

    const label = toDoElement.querySelector('label');
    label.htmlFor = todo.id;
    label.append(todo.title);
    myVar.todosContainerElement.appendChild(toDoElement);
  });
};

const render = () => {
  clearElement(myVar.projectListContainer);
  renderProjects();
  const selectedProject = myVar.projectList.find(project => project.id === myVar.selectedProjectId);

  if (myVar.selectedProjectId === null) {
    myVar.todosContainerElement.classList.add('hide');
  } else {
    myVar.todosContainerElement.classList.remove('hide');
    myVar.toDoTitleElement.innerText = selectedProject.title;
    renderToDosCountFor(selectedProject);
    clearElement(myVar.todosContainerElement);
    renderToDoListFor(selectedProject);
  }
};

const saveAndRender = () => {
  save();
  render();
};

export { saveAndRender, render, myVar };
