import './index.scss';
import renderer from './modules/ProjectFormRenderer';

const newBtn = document.querySelector('.new-project-btn');
newBtn.addEventListener('click', renderer);
