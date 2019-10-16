import React from 'react';

import Portfolio from '../../../Static/Images/Projects/Portfolio.png';
import Clicker from '../../../Static/Images/Projects/Clicker.png';
import Life from '../../../Static/Images/Projects/Life.png';
import ShortWay from '../../../Static/Images/Projects/ShortWay.png';

import s from './Main.module.css';
// type='video/mp4' autoPlay loop muted
const MainProjects = () => {

            return (
   	<div className={s.Projects}>
   	    <div className={s.Proj}>
      <a href='https://github.com/SEPEZHO/Portfolio'>
      <span className={s.Text}>Portfolio</span>
      <span className={s.TextDesc}>Btw its this site project. I create my own portfolio about my projects.</span>
        <img alt='' src={Portfolio} className={s.ProjImg} />
</a>    
    </div>

    <div className={s.Proj1}>
      <a href='https://github.com/SEPEZHO/Clicker'>
      <span className={s.Text}>Clicker</span>
    	<span className={s.TextDesc}>Game clicker (with account sistem and chat on websockets). You need to click to take a NOC.</span>
        <img alt='' src={Clicker} className={s.ProjImg} />
</a>    
  	</div>

<div className={s.Proj2}>
      <a href='https://github.com/SEPEZHO/Game-OF-life'>
    	<span className={s.Text}>Game-OF-life</span>
    	<span className={s.TextDesc}>Thats game of life on canvas. My first programm on JS.</span>
        <img alt='' src={Life} className={s.ProjImg}/>
</a>    
  	</div>
  	<div className={s.Proj3}>
      <a href='https://github.com/SEPEZHO/ShortWay'>
    	<span className={s.Text}>ShortWay</span>
    	<span className={s.TextDesc}>Algoritm about finding the shortest way to finish poin.</span>
        <img alt='' src={ShortWay} className={s.ProjImg}/>
</a>    
  	</div>
  	</div>
  )
          }

export default MainProjects;