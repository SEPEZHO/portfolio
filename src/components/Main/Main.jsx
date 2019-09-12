import React from 'react';
import Main_projects from './Main_projects.jsx';
import GitHub from './GitHub_Repos.jsx';

import s from './Main.module.css';


const Main = () => {
  return (
    <div className ={s.main}>
    	Main
    	<Main_projects />
    	<GitHub />
    </div>
  );
}

export default Main;