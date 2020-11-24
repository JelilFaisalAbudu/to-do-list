import AddToDo from '../src/modules/addToDo';
import AddToProject from '../src/modules/AddToProject';


test('It creates new project', () => {
  const newAddToProject = new AddToProject('Test project title', 'Test project desc');
  expect(newAddToProject.title).toBe('Test project title');
  expect(newAddToProject.description).toBe('Test project desc');
});

test('It creates a new To-Do', () => {
  const newAddToDo = new AddToDo('test title', 'test desc', Date.now(), 2, true);
  expect(newAddToDo.title).toBe('test title');
  expect(newAddToDo.description).toBe('test desc');
});

test('It appends the todo to Project', () => {
  const newAddToProject = new AddToProject('Test project title', 'Test project desc');
  const newAddToDo = new AddToDo('test title', 'test desc', Date.now(), 2, true);
  newAddToProject.toDoList.push(newAddToDo);
  expect(newAddToProject.toDoList.length).toEqual(1);
});
