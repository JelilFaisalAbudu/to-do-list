import clearElement from './clearElement';
import renderProjects from './RenderProjects';
import variables from './variables';
import renderToDosCountFor from './renderToDosCountFor';
import renderToDoListFor from './renderToDoListFor';

const newVar = variables();

const render = () => {
  clearElement(newVar.projectListContainer);
  renderProjects(newVar.projectList);
  const selectedProject = newVar.projectList
    .find(project => project.id === newVar.selectedProjectId);

  if (newVar.selectedProjectId === null) {
    newVar.toDoListDisplayContainer.classList.add('hide');
  } else {
    newVar.toDoListDisplayContainer.classList.remove('hide');
    newVar.toDoTitleElement.innerText = selectedProject.title;
    renderToDosCountFor(selectedProject);
    clearElement(newVar.toDoListDisplayContainer);
    renderToDoListFor(selectedProject);
  }
};

export default render;