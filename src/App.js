import React from 'react';

import Menu from './Components/Menu/Menu.jsx';
import Body from './Components/RenderBody.jsx';
import Footer from './Components/Footer/Footer.jsx';

import s from './Style/App.sass';

class App extends React.Component{
    constructor() {
        super();
        this.state = {}
    }
    pathMain = (val) => {
    	this.setState({ path: val })
    }
   	render () {
    	return (
	      <div className={s.App}>
	      
		      <Menu pathMain={this.pathMain}/>
		      <Body path={this.state.path}/>
		      <Footer />
	      
	      </div>	
   		)	
    }
}

export default App;