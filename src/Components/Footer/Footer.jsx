import React from 'react';

import s from './Footer.module.sass';
import DownMenu from './DownMenu.jsx'
import SideBar from './SideBar.jsx'
import Text from './Text.jsx'
import Comments from './CommentSystem/CommentSystem.jsx'

const Footer = () =>{
    return (
        <div className={s.FooterMain}>
       		<div className={s.Footer}>
           		<SideBar />
       	    	<Text />
       	    	<DownMenu />           
        		  <Comments />
        	</div>
        </div>
    )
}

export default Footer;