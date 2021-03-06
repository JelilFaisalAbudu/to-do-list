const toggleProjectContainer = () => {
  const projectContainer = document.getElementById('projectContainer');
  const openProjectContainerElement = document.querySelector('.open-project-container');
  projectContainer.classList.toggle('show');
  openProjectContainerElement.classList.toggle('hide');
};

const openProjectContainerElement = document.querySelector('.open-project-container');
const closeProjectContainerElement = document.querySelector('.close-project-container-btn');

openProjectContainerElement.addEventListener('click', toggleProjectContainer);
closeProjectContainerElement.addEventListener('click', toggleProjectContainer);

window.onload = () => {
  $('#addTodo').click(() => {
    $('#todoForm').modal('hide');
  });
  $('#submitProject').click(() => {
    $('#projectForm').modal('hide');
  });
  $('#saveEdit').click(() => {
    $('#editTodoForm').modal('hide');
  });
};