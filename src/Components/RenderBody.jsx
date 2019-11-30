import React from "react";

import MainPageRender from "./MainPage/MainPageRender.jsx";
import ContactPageRender from "./ContactPage/ContactPageRender.jsx";
import Projects from "./Projects/Projects.jsx";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  componentWillMount() {
  fetch(){
fetch("https://sepezho.ru:7777/API/RepCom", {
      method: "POST"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ dataRepCom: {dataComOld: data.Com, dataCom: data.Com.slice(0, 11), dataRes: data.Res}});
        console.log(this.state.dataRepCom.dataComOld)
      })
      .catch(error => {
        console.log(error);
      });
  }
  renderMain = () => {
    document.documentElement.scrollTop = 0;

    if (this.props.path === "/Main") {
      return <MainPageRender pathMain={this.props.pathMain} dataCom={this.state.dataRepCom.dataCom.slice(0, 6)}/>;
    } else if (this.props.path === "/Projects") {
      return <Projects dataRepCom={this.state.dataRepCom}/>;
    } else if (this.props.path === "/Contact") {
      return <ContactPageRender />;
    } else {
      return <MainPageRender pathMain={this.props.pathMain} />;
    }
  };

  render() {
    return (<div>{this.renderMain()}</div>);
  }
}

export default Body;
