import React from 'react';
import Header_mp4 from '../../static/me.jpg';
import Title_header from './Title_header.jsx';

import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
    	<img src={Header_mp4}/>
    	<Title_header />
    </div>
  );
}

export default Header;