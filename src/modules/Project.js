function ProjectUI(project) {
  const body = document.querySelector('body');
  const firstP = document.createElement('p');
  const secondP = document.createElement('p');
  firstP.innerText = project.title;
  secondP.innerText = project.description;
  body.appendChild(firstP);
  body.appendChild(secondP);
}

export default ProjectUI;