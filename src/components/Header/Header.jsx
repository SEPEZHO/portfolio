import React from 'react';
import HeaderMp4 from '../../Static/Images/Me.jpg';
import TitleHeader from './TitleHeader.jsx';

import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.Header}>
    	<img alt='' src={HeaderMp4}/>
    	<TitleHeader />
    </div>
  );
}

export default Header;