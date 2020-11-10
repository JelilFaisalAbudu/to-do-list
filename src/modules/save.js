import variables from './variables';

const newVar = variables();

const save = () => {
  localStorage.setItem(newVar
    .LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(newVar.projectList));
  localStorage.setItem(newVar
    .LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, newVar.selectedProjectId);
};

export default save;