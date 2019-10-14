import React from 'react';

import s from './Footer.module.css';
import LikeBtn from './LikeBtn.js'
import DownMenu from './DownMenu.js'
import SideBar from './SideBar.js'

const Footer = () => {
        return (
            <div className={s.Footer}>
                    <SideBar />
                    <DownMenu />           
                    <LikeBtn />
            </div>
        )
}

export default Footer;