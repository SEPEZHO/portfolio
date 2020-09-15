import React from "react";

import Menu from "./Components/Menu/Menu.jsx";
import Body from "./Components/RenderBody.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import s from "./Style/App.sass";
import sT from "./Style/Toggle.module.sass";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "/Main",
      lg: "en",
      lgToggleStyle: {left: '0'},
      toggle: false
    };
  }
  lgChange = () => {
    if (this.state.toggle){
      this.setState({lg: "en"})
      this.setState({lgToggleStyle: {
        left: '0',
      }})
    }else{
      this.setState({lg: "ru"})
      this.setState({lgToggleStyle: {
        left: '50%',
      }})
    }
    this.setState({toggle: !this.state.toggle})
  }
  pathMain = val => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    this.setState({ path: val });
  };
  render() {
    return (
      <div className={s.App}>
        <Menu path={this.state.path} language={this.state.toggle} pathMain={this.pathMain} />
        <Body path={this.state.path} language={this.state.toggle} pathMain={this.pathMain} />
        <Footer language={this.state.toggle} pathMain={this.pathMain}/>
        <div className={sT.BtnContainer} onClick={this.lgChange}>
          <div className={sT.Btn} style={this.state.lgToggleStyle}>
            {this.state.lg}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
