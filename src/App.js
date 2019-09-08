import React from 'react';

import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

import './style/App.css';

const App = () => {
  return (
    <div className='app' >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;