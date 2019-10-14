import React from 'react';
import HeaderImg from '../../Static/Images/Me.jpg';
import TitleHeader from './TitleHeader.jsx';
import SideBar from '../Footer/SideBar.js';

import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.Header}>
    	<SideBar />
    	<img alt='' src={HeaderImg}/>
    	<TitleHeader />
    </div>
  );
}

export default Header;