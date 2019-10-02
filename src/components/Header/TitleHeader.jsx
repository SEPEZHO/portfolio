import React from 'react';

import s from './Header.module.css';
const TitleHeader = () => {
  return (
   	<div className='TitleHeader'>
  		<div className={s.Name}>
        <h1>Vladislav Bliznyuk</h1>
        Программирование - мое хобби, пишу сайтики о всяком (в основном веб-приложения (в основном игры)). Сижу на самообучении и балдею.
  		</div>
  		<div className={s.Subs}>
  			YouTube: 0
  		</div>
  	</div>
  );
}

export default TitleHeader;