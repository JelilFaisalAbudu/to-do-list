import projectFormUI from './projectFormUI';
import Project from './AddToProject';
import ProjectUI from './Project';
import toDoForm from './toDoForm';
import Todo from './addToDo';
import ToDoUI from './ToDoUI';

let projects = [];
const loadLocalStorage = () => {
  if (localStorage.getItem('myToDoProjects', JSON.stringify(projects))) {
    projects = JSON.parse(localStorage.getItem('myToDoProjects'));
  } else {
    projects = [];
  }
};

const renderProjects = (projects) => {
  const projectContainer = document.querySelector('.project-container');
  projectContainer.innerHTML = '';
  projects.forEach(project => {
    const list = document.createElement('div');
    list.classList.add('list-item');
    list.innerText = project.title;
    projectContainer.appendChild(list);
  });
};

window.addEventListener('load', () => {
  loadLocalStorage();
  renderProjects(projects);
});

function renderer() {
  projectFormUI();
  loadLocalStorage();
  const createBtn = document.querySelector('.submit-btn');

  if (document.querySelector('.project-form')) {
    createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectTitle = document.querySelector('.form-control').value;
      const projectDescription = document.querySelectorAll('.form-control')[1].value;
      const newProject = new Project(projectTitle, projectDescription);
      renderProjects(projects);
      ProjectUI(newProject);
      document.querySelector('.project-form').remove()
      document.querySelectorAll('.add-todo-btn').forEach(todo => {
        todo.addEventListener('click', () => {
          toDoForm();
          todo.remove();
          document.querySelectorAll('.add-button-for-todo').forEach((item) => {
            item.addEventListener('click', (e) => {
              e.preventDefault();
              const todoFormTitle = document.querySelector('.todo-form-title').value;
              const todoFormDescription = document.querySelector('.todo-form-description').value;
              const todoFormDate = document.querySelector('.todo-form-duedate').value;
              const todoFormPriority = document.querySelector('.todo-form-priority').value;
              const todoFormCompleted = document.querySelector('.todo-form-completed').value;
              const newTodo = new Todo(
                todoFormTitle,
                todoFormDescription,
                todoFormDate,
                todoFormPriority,
                todoFormCompleted,
              );
              newProject.toDoList.push(newTodo);
              projects.push(newProject);
              localStorage.setItem('myToDoProjects', JSON.stringify(projects));
              ToDoUI(newTodo);
            });
          });
        });
      });
    });
  }
}

export default renderer;