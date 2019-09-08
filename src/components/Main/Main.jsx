import React from 'react';
import Main_projects from './Main_projects.jsx';

import s from './Main.module.css';

const Main = () => {
  return (
    <div className ={s.main}>
    	Main
    	<Main_projects />
    </div>
  );
}

export default Main;