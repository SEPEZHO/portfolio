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
      document.documentElement.scrollTop = 0;

      if (this.props.path === '/Main'){
        return <MainPageRender pathMain={this.props.pathMain}/>

      }else if (this.props.path === '/Projects'){
        return <Projects/>

      }else if (this.props.path === '/Contact'){
        return <ContactPageRender/>

      }else{
        return <MainPageRender pathMain={this.props.pathMain}/>
      }
    }

    render (){
      return (
       <div>{this.renderMain()}</div>

      )
    }
}

export default Body;