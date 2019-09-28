import React from 'react';
import s from './Menu.module.css';

const Menu = () => {
  return (
    <div className ={s.Menu}>
    	<div className={s.Contact}><div></div><a href='/Contact'>Contact</a></div>
    	<div className={s.Main}><div></div><a href='/Main'>Main</a></div>
    	<div className={s.Projects}><div></div><a href='/Projects'>Projects</a></div>
    </div>
  );
}

export default Menu;