import React from 'react';

import s from './Footer.module.css';
import LikeBtn from './LikeBtn.js'
import DownMenu from './DownMenu.js'
import SideBar from './SideBar.js'
import Text from './Text.js'
import Comments from './Comments.js'

const Footer = () => {
        return (
            <div className={s.Footer}>
                    <SideBar />
                    <Text />
                    <DownMenu />           
                    <Comments />
                    <LikeBtn />
            </div>
        )
}

export default Footer;