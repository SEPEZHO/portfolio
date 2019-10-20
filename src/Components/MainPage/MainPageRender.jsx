import React from 'react';

import SideBar from '../Footer/SideBar.jsx';
import HeaderImg from './Header/HeaderImg.jsx';
import Main from './Main/Main.jsx';
import TitleHeader from './Header/TitleHeader.jsx';

const MainPageRender = () => {
  return (
    <div >
    	<TitleHeader />
    	<SideBar />
    	<HeaderImg />
    	<Main />
    </div>
  );
}

export default MainPageRender;