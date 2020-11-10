import variables from './variables';

const newVar = variables();

const renderToDosCountFor = (selectedProject) => {
  const incompleteToDosCount = selectedProject.toDoList.filter(todo => !todo.complete).length;
  const taskString = incompleteToDosCount === 1 ? 'task' : 'tasks';
  newVar.toDosCountElement.innerText = `${incompleteToDosCount} ${taskString} remaining`;
};

export default renderToDosCountFor;