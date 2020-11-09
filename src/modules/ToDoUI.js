function ToDoUI(project) {
  const body = document.querySelector('body');
  const firstP = document.createElement('p');
  const secondP = document.createElement('p');
  const thirddP = document.createElement('p');
  const fourthdP = document.createElement('p');
  const fifthdP = document.createElement('p');
  const firstDiv = document.createElement('div');

  firstP.innerText = `The to do Title is: ${project.title}`;
  secondP.innerText = `The to do description is: ${project.description}`;
  thirddP.innerText = `The to do date is: ${project.dueDate}`;
  fourthdP.innerText = `The to do priority is: ${project.priority}`;
  fifthdP.innerText = `The to do completed is: ${project.completed}`;
  firstDiv.appendChild(firstP);
  firstDiv.appendChild(secondP);
  firstDiv.appendChild(thirddP);
  firstDiv.appendChild(fourthdP);
  firstDiv.appendChild(fifthdP);
  firstDiv.setAttribute('class', 'todo-ui');
  body.appendChild(firstDiv);
}

export default ToDoUI;