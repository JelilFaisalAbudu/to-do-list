import Project from './Projects';

const projectUI = () => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('form-control');

  const label = document.createElement('label');
  label.innerText = 'Project Title';
  label.appendChild(input);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.innerText = 'Create';

  const form = document.createElement('form');
  form.appendChild(label);
  form.appendChild(submit);

  const inputVal = null;
  form.addEventListener('submit', () => {
    inputVal = input.value;
    const newProject = new Project(inputVal);
    projectsArr.push(newProject);
  });

};

export default projectUI;