import React from 'react';

import s from './Header.module.css';
const Title_header = () => {
  return (
   	<div className='Title_header'>
  		<div className={s.name}>
   			Created by: Vladislav Bliznyuk.
  		</div>
  		<div className={s.subs}>
  			YouTube: 0
  		</div>
  	</div>
  );
}

export default Title_header;