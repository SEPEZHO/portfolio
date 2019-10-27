import React from 'react';

import ProjectsTable from './ProjectsTable.jsx'
import ProjectsText from './ProjectsText.jsx'
import s from './Projects.module.css'

const Projects = () => {
  return (
    <div className={s.Projects}>
    	<ProjectsTable times='100'/>
		<ProjectsText/>
    </div>
  );
}

export default Projects;