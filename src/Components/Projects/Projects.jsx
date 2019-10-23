import React from 'react';

import ProjectsTable from './ProjectsTable.jsx'
import s from './Projects.module.css'

const Projects = () => {
  return (
    <div className={s.Projects}>
    	<ProjectsTable />
    	<div className={s.Text}>
    		<span>AAAAAAAAAAAAAAAAAAAAA its a projects</span>
    	</div>
    </div>
  );
}

export default Projects;