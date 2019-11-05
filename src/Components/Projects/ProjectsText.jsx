import React from 'react';

import ProjectsRepos from './ProjectsRepos.jsx'
import s from './Projects.module.sass'

const Text = () => {
  return (
    <div className={s.Text}>
    <div className={s.ProjectsReposMain}>
			<h1>Repositories</h1>
			<ProjectsRepos />
    </div>
    </div>
  );
}

export default Text;