import React from 'react';
import Header_mp4 from '../static/Header_mp4.mp4';

const Header = () => {
  return (
    <div className='header' >
    	<video src={Header_mp4} type='video/mp4' autoPlay loop muted/>
    	Header
    </div>
  );
}

export default Header;