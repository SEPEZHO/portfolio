import React from 'react';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import './style/App.css';

const App = () => {
  return (
    <div className='site' >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;