import React from 'react';
import MainProjects from './MainProjects.jsx';
import GitHub from './GitHubRepos.jsx';
import MainAbout from './About.jsx';

import s from './Main.module.css';


const Main = () => {
  return (
    <div className ={s.Main}>
    	<MainAbout />
    	<MainProjects />
    	<GitHub />
    </div>
  );
}

export default Main;