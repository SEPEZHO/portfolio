import React from 'react';
import HeaderImg from '../../../Static/Images/Me.jpg';

import s from './Header.module.sass';

const Header = () => {
  return (
    <div className={s.Header}>
    	<img alt='' src={HeaderImg}/>
    </div>
  );
}

export default Header;