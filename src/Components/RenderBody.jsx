import React from "react";

import MainPageRender from "./MainPage/MainPageRender.jsx";
import ContactPageRender from "./ContactPage/ContactPageRender.jsx";
import Projects from "./Projects/Projects.jsx";

class Body extends React.Component {
  componentDidMount() {
    fetch("https://sepezho.ru:7777/API/RepCom", {
      method: "POST"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          dataRepCom: {
            dataComOld: data.Com,
            dataRes: data.Res,
            dataCom: data.Com.slice(0, 11)
          }
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderMain() {
    document.documentElement.scrollTop = 0;

    if (this.props.path === "/Main" && this.state) {
      return <MainPageRender pathMain={this.props.pathMain} dataCom={this.state.dataRepCom.dataCom.slice(0, 6)}/>
    } else if (this.props.path === "/Projects" && this.state) {
      return <Projects dataRepCom={this.state.dataRepCom}/>;
    } else if (this.props.path === "/Contact" && this.state) {
      return <ContactPageRender/>;
    } else if (this.state){
      return <MainPageRender pathMain={this.props.pathMain}/>;
    }
  };

  render() {
    return <div>{this.renderMain()}</div>
  }
}

export default Body;
