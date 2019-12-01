import React from "react";

import Menu from "./Components/Menu/Menu.jsx";
import Body from "./Components/RenderBody.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import s from "./Style/App.sass";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "/Main"
    };
  }
  pathMain = val => {
    document.documentElement.scrollTop = 0;
    this.setState({ path: val });
  };
  render() {
    return (
      <div className={s.App}>
        <Menu path={this.state.path} pathMain={this.pathMain} />
        <Body path={this.state.path} pathMain={this.pathMain} />
        <Footer />
      </div>
    );
  }
}

export default App;