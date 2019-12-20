import React from "react";

import MainPageRender from "./MainPage/MainPageRender.jsx";
import ContactPageRender from "./ContactPage/ContactPageRender.jsx";
import Projects from "./Projects/Projects.jsx";

import loadGif from "../Static/Images/Loading.gif";
import s from "./Style.module.sass";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      styleLoad: {}
    };
  }
  componentDidMount() {
    this.fetchLoad(false);
  }
  fetchLoad(retry) {
    fetch("https://sepezho.ru:7777/API/RepComViews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        retry: retry
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          dataRepCom: {
            dataComOld: data.Com,
            dataRes: data.Res,
            dataViews: data.Views,
            dataCom: data.Com.slice(0, 11)
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.loading();
  }
  loading() {
    setTimeout(() => {
      if (this.state.i < 5) {
        this.state.i++;
        console.log(this.state.i);
        if (this.state.dataRepCom) {
          document.documentElement.scrollTop = 0;
          this.setState({
            styleLoad: {
              opacity: 0,
              visibility: "hidden"
            }
          });
          console.log();
        } else {
          this.fetchLoad(true);
        }
      } else {
        alert("Возможны проблемы с сервером. Перезайдите позже.");
      }
    }, 5000);
  }

  renderMain() {
    if (this.state.dataRepCom) {
      if (this.props.path === "/Main") {
        return (
          <MainPageRender
            pathMain={this.props.pathMain}
            dataCom={this.state.dataRepCom.dataCom.slice(0, 6)}
            dataViews={this.state.dataRepCom.dataViews}
          />
        );
      } else if (this.props.path === "/Projects") {
        return <Projects dataRepCom={this.state.dataRepCom} />;
      } else if (this.props.path === "/Contact") {
        return <ContactPageRender />;
      } else {
        return <MainPageRender pathMain={this.props.pathMain} />;
      }
    }
  }

  render() {
    return (
      <div>
        <div style={this.state.styleLoad} className={s.Loading}>
          <img alt="" src={loadGif} />
        </div>

        {this.renderMain()}
      </div>
    );
  }
}

export default Body;
