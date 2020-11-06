import projectFormUI from './projectFormUI';
import Project from './AddToProject';
import ProjectUI from './Project';
import toDoForm from './toDoForm';

function renderer() {
  projectFormUI();
  document.querySelector('.new-project-btn').remove();

  const createBtn = document.querySelector('.submit-btn');

  if (document.querySelector('.project-form')) {
    createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectTitle = document.querySelector('.form-control').value;
      const projectDescription = document.querySelectorAll('.form-control')[1].value;
      const newProject = new Project(projectTitle, projectDescription);
      ProjectUI(newProject);

      const addToDoBtn = document.querySelector('.add-todo-btn');
      addToDoBtn.addEventListener('click', () => {
        toDoForm();
      });
    });
  }
}

export default renderer;
