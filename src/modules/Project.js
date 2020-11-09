let i = 0;
function ProjectUI(project) {
  const body = document.querySelector('body');
  const firstP = document.createElement('p');
  const secondP = document.createElement('p');
  const firstDiv = document.createElement('div');
  const addToDoBtn = document.createElement('button');
  addToDoBtn.innerText = 'Create a To Do';
  addToDoBtn.setAttribute('class', 'add-todo-btn');
  firstP.innerText = `The project Title is: ${project.title}`;
  secondP.innerText = `The project description is: ${project.description}`;
  firstDiv.appendChild(firstP);
  firstDiv.appendChild(secondP);
  firstDiv.appendChild(addToDoBtn);
  firstDiv.setAttribute('id', `${i += 1}`);
  firstDiv.setAttribute('class', 'project-ui');
  body.appendChild(firstDiv);
}

export default ProjectUI;