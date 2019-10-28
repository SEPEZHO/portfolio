import React from 'react';

import ProjectsTable from './ProjectsTable.jsx'
import ProjectsText from './ProjectsText.jsx'
import s from './Projects.module.css'

const Projects = () => {
  return (
    <div className={s.Projects}>
    <div className={s.ProjectsTableMain}>
              <h1>Activites </h1>
    	<ProjectsTable times='100'/>
    </div>
		<ProjectsText/>
    </div>
  );
}

export default Projects;