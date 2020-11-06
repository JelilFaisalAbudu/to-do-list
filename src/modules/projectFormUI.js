const projectUI = () => {
  const body = document.querySelector('body');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('form-control');

  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.classList.add('form-control');

  const label1 = document.createElement('label');
  label1.innerText = 'Project Description';
  label1.appendChild(description);

  const label = document.createElement('label');
  label.innerText = 'Project Title';
  label.appendChild(input);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('class', 'submit-btn');
  submit.innerText = 'Create';

  const form = document.createElement('form');
  form.setAttribute('class', 'project-form');
  form.appendChild(label);
  form.appendChild(label1);
  form.appendChild(submit);
  body.appendChild(form);
};

export default projectUI;