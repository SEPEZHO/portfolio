import React from 'react';
import Header_mp4 from '../static/Header_mp4.mp4';

const Main_projects = () => {
  return (
   	<div className='Main_projects'>
      <div className='First_project'>
        <video src={Header_mp4} type='video/mp4' autoPlay loop muted/>
      </div>
  	</div>
  );
}

export default Main_projects;