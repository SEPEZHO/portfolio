import React from 'react';
import Header_mp4 from '../../static/Header_mp4.mp4';

import s from './Main.module.css';

const Main_projects = () => {
  return (
   	<div className={s.projects}>
   	<div className={s.proj_1}>
   		<span className={s.text}>Кликер</span>
    	<span className={s.textDesc}>Описание кликера. Куртая игра очень кликабельно. Писал 3 месяца много нового узнал.</span>
        <video src={Header_mp4} className={s.proj_video} type='video/mp4' autoPlay loop muted/>
  	</div>
  	<div className={s.proj_2}>
    	<span className={s.text}>Игра жизнь</span>
    	<span className={s.textDesc}>Очень жизненая игра. Писал месяц. Постигал основы JS.</span>
        <video src={Header_mp4} className={s.proj_video} type='video/mp4' autoPlay loop muted/>
  	</div>
  	<div className={s.proj_3}>
    	<span className={s.text}>Поиск пути</span>
    	<span className={s.textDesc}>Алгаритм поиска пути. Постигал основы основ JS.</span>
        <video src={Header_mp4} className={s.proj_video} type='video/mp4' autoPlay loop muted/>
  	</div>
  	</div>
  );
}

export default Main_projects;