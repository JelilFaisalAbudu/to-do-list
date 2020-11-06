import './index.scss';
import renderer from './modules/ToDoUI';


let body = document.querySelector('.new-project-btn');
body.addEventListener('click', renderer);
