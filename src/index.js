import './index.scss';
import renderer from './modules/ProjectFormRenderer';

const newBtn = document.querySelector('.new-project-btn');



newBtn.addEventListener('click', () => {
  if (document.querySelector('.todo-ui')) {
    document.querySelectorAll('.todo-ui').forEach((item) => {
      item.remove();
    });
  }
  if (document.querySelector('.project-ui')) {
    document.querySelectorAll('.project-ui').forEach((item) => {
      item.remove();
    });
  }
  if (document.querySelector('.project-form')) {
    document.querySelectorAll('.project-form').forEach((item) => {
      item.remove();
    });
  }
  if (document.querySelector('.todo-form')) {
    document.querySelectorAll('.todo-form').forEach((item) => {
      item.remove();
    });
  }
});
newBtn.addEventListener('click', renderer);