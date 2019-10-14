import React from 'react';

import s from './Footer.module.css';

import SrcGithub from '../../Static/Images/Icons/GitHub.png'
import SrcStackOverflow from '../../Static/Images/Icons/StackOverflow.png'
import SrcYouTube from '../../Static/Images/Icons/YouTube.png'
import SrcVk from '../../Static/Images/Icons/Vk.png'

const SideBar = () => {
    return (
        <div className={s.SideBar}>
        	<a href='https://stackoverflow.com/users/12073046/sepezho'><img className={s.SrcGithub} src={SrcGithub} alt=''/></a>
        	<a href='https://github.com/SEPEZHO'><img className={s.SrcStackOverflow} src={SrcStackOverflow} alt=''/></a>
        	<a href='https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ/featured?view_as=subscriber'><img className={s.SrcYouTube} src={SrcYouTube} alt=''/></a>
        	<a href='https://vk.com/vlad_ascetic'><img className={s.SrcVk} src={SrcVk} alt=''/></a>
        </div>
    )
}

export default SideBar;