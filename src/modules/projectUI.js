import Project from './Projects';

const projectUI = () => {
  const body = document.querySelector('body');
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
  body.appendChild(form);
};

export default projectUI;