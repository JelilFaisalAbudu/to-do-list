import projectFormUI from './projectFormUI';
import Project from './AddToProject';
import ProjectUI from './Project';
import toDoForm from './toDoForm';
import Todo from './addToDo';
import ToDoUI from './ToDoUI';

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

      document.querySelectorAll('.add-todo-btn').forEach(todo => {
        todo.addEventListener('click', () => {
          toDoForm();
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
                todoFormCompleted
                              );
              newProject.toDoList.push(newTodo);
              ToDoUI(newTodo);
            });
          });
        });
      });
    });
  }
}

export default renderer;
