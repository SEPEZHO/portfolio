import React from 'react';
import Header_mp4 from '../static/Header_mp4.mp4';
import Title_header from './Title_header.jsx';

import s from '../style/Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
    	<video src={Header_mp4} type='video/mp4' autoPlay loop muted/>
    	<Title_header />
    </div>
  );
}

export default Header;