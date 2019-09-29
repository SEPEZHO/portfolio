import React from 'react';

import s from './Header.module.css';
const Title_header = () => {
  return (
   	<div className='Title_header'>
  		<div className={s.name}>
   			<h1>Vladislav Bliznyuk</h1>
        Программирование - мое хобби, пишу сайтики о всяком (в основном веб-приложения (в основном игры)). Сижу на самообучении и балдею.
  		</div>
  		<div className={s.subs}>
  			YouTube: 0
  		</div>
  	</div>
  );
}

export default Title_header;