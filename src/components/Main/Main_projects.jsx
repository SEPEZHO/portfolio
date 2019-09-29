import React from 'react';
import img from '../../static/city.jpg';

import s from './Main.module.css';
// type='video/mp4' autoPlay loop muted
const Main_projects = () => {

            return (
   	<div className={s.projects}>
   	<div className={s.proj_1}>
      <a href='https://github.com/SEPEZHO/Clicker'>
      <span className={s.text}>Clicker</span>
    	<span className={s.textDesc}>Game clicker (with account sistem and chat on websockets). You need to click to take a NOC.</span>
        <img src={img} className={s.proj_video} />
</a>    
  	</div>
<div className={s.proj_2}>
      <a href='https://github.com/SEPEZHO/Game-OF-life'>
    	<span className={s.text}>Game-OF-life</span>
    	<span className={s.textDesc}>Thats game of life on canvas. My first programm on JS.</span>
        <img src={img} className={s.proj_video}/>
</a>    
  	</div>
  	<div className={s.proj_3}>
      <a href='https://github.com/SEPEZHO/ShortWay'>
    	<span className={s.text}>ShortWay</span>
    	<span className={s.textDesc}>Algoritm about finding the shortest way to finish poin.</span>
        <img src={img} className={s.proj_video}/>
</a>    
  	</div>
  	</div>
  )
          }

export default Main_projects;