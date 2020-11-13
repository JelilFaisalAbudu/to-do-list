const variables = () => {
  const newProjectForm = document.querySelector('.new-project-form');
  const newTodoForm = document.getElementById('newTodoForm');
  const editTodoForm = document.getElementById('editTodoFormEl');
  const newProjectTitleInput = document.querySelector('.new-project-title-input');
  const deleteListButton = document.getElementById('deleteProjectButton');
  const toDoTemplate = document.getElementById('toDoTemplate');
  const todoDetailTemplate = document.getElementById('todoDetail');
  const toDoListDisplayContainer = document.getElementById('toDoListDisplayContainer');
  const todosContainerElement = document.querySelector('.to-dos-container');
  const toDoTasksContainer = toDoListDisplayContainer.querySelector('.to-do-tasks-container');
  const toDoTitleElement = toDoListDisplayContainer.querySelector('.to-do-title');
  const toDosCountElement = toDoListDisplayContainer.querySelector('.to-dos-count');
  const checkboxes = document.querySelectorAll('.checkbox');
  const LOCAL_STORAGE_PROJECTS_KEY = 'todo.list';
  const projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [{ id: '1603023086264', title: 'Default ', toDoList: [] }];
  const projectListContainer = document.querySelector('.project-list');
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';
  const selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);
  return {
    newProjectForm,
    newTodoForm,
    newProjectTitleInput,
    deleteListButton,
    toDoTemplate,
    todoDetailTemplate,
    toDoTasksContainer,
    toDoTitleElement,
    toDosCountElement,
    LOCAL_STORAGE_PROJECTS_KEY,
    projectList,
    projectListContainer,
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId,
    toDoListDisplayContainer,
    todosContainerElement,
    editTodoForm,
    checkboxes,
  };
};

export default variables;