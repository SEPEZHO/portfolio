import React from 'react';
import Main_projects from './Main_projects.jsx';
import GitHub from './GitHub_Repos.jsx';
import Main_about from './About.jsx';

import s from './Main.module.css';


const Main = () => {
  return (
    <div className ={s.main}>
    	Main
    	<Main_about />
    	<Main_projects />
    	<GitHub />
    </div>
  );
}

export default Main;