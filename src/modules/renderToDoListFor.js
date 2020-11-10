import variables from './variables';

const newVar = variables();

const renderToDoListFor = (selectedProjectId) => {
  selectedProjectId.toDoList.forEach(todo => {
    const toDoElement = document.importNode(newVar.toDoTemplate.content, true);
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
    newVar.toDoListDisplayContainer.appendChild(toDoElement);
  });
};

export default renderToDoListFor;