import projectFormUI from './projectFormUI';
import Project from './AddToProject';
import ProjectUI from './Project';

function renderer() {
  projectFormUI();
  document.querySelector('.new-project-btn').remove();

  const createBtn = document.querySelector('.submit-btn');

  createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectTitle = document.querySelector('.form-control').value;
    const projectDescription = document.querySelectorAll('.form-control')[1].value;
    const newProject = new Project(projectTitle, projectDescription);
    ProjectUI(newProject);
  });
}

export default renderer;
