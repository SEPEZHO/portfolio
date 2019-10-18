import React from 'react';

import SideBar from '../Footer/SideBar.jsx';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';

const MainPageRender = () => {
  return (
    <div >
    	<SideBar />
    	<Header />
    	<Main />
    </div>
  );
}

export default MainPageRender;