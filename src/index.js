import './index.scss';
import ToDo from './modules/Todo';
import Projects from './modules/Projects';

const ProjectsVar = new Projects('SUper Title', 'Super Description', new ToDo('super todo', 'super todo desc', '05.11.20202', 3, 'it could be delayed', false));

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello, webpack';

  return element;
}

document.body.appendChild(component());