import React from "react";
import { BrowserRouter } from 'react-router-dom'
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import Menu from "./Components/Menu/Menu.jsx";
import Body from "./Components/RenderBody.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import s from "./Style/App.sass";
import sT from "./Style/Toggle.module.sass";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lg: "ru",
      lgToggleStyle: {left: '0'},
      toggle: true
    };
  }
  lgChange = () => {
    if (this.state.toggle){
      this.setState({lg: "en"})
      this.setState({lgToggleStyle: {
        left: '50%',
      }})
    }else{
      this.setState({lg: "ru"})
      this.setState({lgToggleStyle: {
        left: '0',
      }})
    }
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    return (
      <div className={s.App}>
        <BrowserRouter>
          <Menu language={this.state.toggle} />
          <Body language={this.state.toggle} />
          <Footer language={this.state.toggle} />
          <div className={sT.BtnContainer} onClick={this.lgChange}>
            <div className={sT.Btn} style={this.state.lgToggleStyle}>
              {this.state.lg}
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
