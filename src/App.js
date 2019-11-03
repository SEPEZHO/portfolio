import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu.jsx';

import MainPageRender from './Components/MainPage/MainPageRender.jsx';
import ContactPageRender from './Components/ContactPage/ContactPageRender.jsx';
import Projects from './Components/Projects/Projects.jsx';

import Footer from './Components/Footer/Footer.jsx';

import s from './Style/App.css';

const App = () => {
    return (
      <div className={s.App}>
      
      <Menu />
      
      <div className={s.Content}>
      	<BrowserRouter>
      		<Switch>
 
      			<Route exact path='/' component={MainPageRender}/>
      			<Route path='/Contact' component={ContactPageRender}/>
            <Route path='/Projects' component={Projects}/>

	  		   </Switch>
 		     </BrowserRouter>
	     </div>

      <Footer />
      
    </div>
    );
}

export default App;