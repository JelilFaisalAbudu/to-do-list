function ProjectUI(project) {
  const body = document.querySelector('body');
  const firstP = document.createElement('p');
  const secondP = document.createElement('p');
  const firstDiv = document.createElement('div');
  const addToDoBtn = document.createElement('button');
  addToDoBtn.innerText = 'Add To Do';
  firstP.innerText = `The project Title is: ${project.title}`;
  secondP.innerText = `The project description is: ${project.description}`;
  firstDiv.appendChild(firstP);
  firstDiv.appendChild(secondP);
  firstDiv.appendChild(addToDoBtn);
  body.appendChild(firstDiv);
}

export default ProjectUI;