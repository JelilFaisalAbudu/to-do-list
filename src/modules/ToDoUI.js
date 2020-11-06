import projectUI from './projectUI';

function renderer() {
  projectUI();
  document.querySelector('.new-project-btn').remove();
}

export default renderer;
