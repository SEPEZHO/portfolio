import React from 'react';
import MainProjects from './MainProjects.jsx';
import ProjectsTable from '../../Projects/ProjectsTable.jsx'
import MainAbout from './About.jsx';
import ViewMore from '../../../Static/Images/Icons/ViewMore.png';

import s from './Main.module.css';


const Main = () => {
  return (
    <div className ={s.Main}>
    	<MainAbout />
        <h1>Good Projects</h1>
    	<MainProjects />
    	<div className={s.Table}>
    		<h1>Last Activites</h1>
    		<div className={s.ProjectsTableMain}>
                <ProjectsTable  times='10'/>
    		</div>
            <a href='/Projects'>
    			<img className={s.ViewMore} src={ViewMore} alt='#' />
    		</a>
    	</div>
    </div>
  );
}

export default Main;