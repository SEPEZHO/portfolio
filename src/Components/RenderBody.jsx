import React from 'react';

import MainPageRender from './MainPage/MainPageRender.jsx';
import ContactPageRender from './ContactPage/ContactPageRender.jsx';
import Projects from './Projects/Projects.jsx';


class Body extends React.Component{
    constructor() {
        super();
        this.state = {}
    }

    renderMain = () =>{
      if (this.props.path === '/Projects'){
        return <Projects/>

      }else if (this.props.path === '/Contact'){
        return <ContactPageRender/>

      }else if (this.props.path === '/Main'){
        return <MainPageRender/>

      }else{
        return <MainPageRender />

      }
      console.log(this.props.path)
    }
    render (){
      return (
       <div>{this.renderMain()}</div>
      )
    }
}

export default Body;