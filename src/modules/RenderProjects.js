import variables from './variables';

const newVar = variables();
const renderProjects = (projectList) => {
  projectList.forEach(project => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-item');
    listElement.dataset.listId = project.id;
    listElement.innerText = project.title;
    if (project.id === newVar.selectedProjectId) {
      listElement.classList.add('active-list-item');
    }
    newVar.projectListContainer.appendChild(listElement);
  });
};

export default renderProjects;