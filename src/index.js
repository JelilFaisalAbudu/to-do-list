import './index.scss';
import renderer from './modules/ProjectFormRenderer';
// import ProjectRenderer from './modules/ProjectRenderer';


const newBtn = document.querySelector('.new-project-btn');
newBtn.addEventListener('click', renderer);

// if (document.querySelector('.project-form')) {
//   ProjectRenderer();
// }
