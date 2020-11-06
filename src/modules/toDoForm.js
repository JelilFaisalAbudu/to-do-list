const toDoForm = () => {
  const body = document.querySelector('body');
  const form = document.createElement('form');
  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'datetime-local');
  const priority = document.createElement('input');
  priority.setAttribute('type', 'number');
  const completed = document.createElement('input');
  completed.setAttribute('type', 'checkbox');
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(completed);
  body.appendChild(form);
};

export default toDoForm;