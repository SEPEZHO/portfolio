import React from 'react';

import Menu from './Components/Menu/Menu.jsx';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Footer from './Components/Footer/Footer.jsx';

import './Style/App.css';

const App = () => {
  return (
    <div className='App' >
      <Menu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;