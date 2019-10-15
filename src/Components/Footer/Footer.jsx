import React from 'react';

import s from './Footer.module.css';
import LikeBtn from './LikeBtn.jsx'
import DownMenu from './DownMenu.jsx'
import SideBar from './SideBar.jsx'
import Text from './Text.jsx'
import Comments from './Comments.jsx'

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