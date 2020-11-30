import React from "react";

import SideBar from "../Footer/SideBar.jsx";
import HeaderImg from "./Header/HeaderImg.jsx";
import Main from "./Main/Main.jsx";
import TitleHeader from "./Header/TitleHeader.jsx";

import s from "./Header/Header.module.sass";
import CV from "../../Static/Images/CV.png";
import CVLOW from "../../Static/Images/CVLOW.png";

class MainPageRender extends React.Component {
  render() {
    return (
      <div>
        <div className={s.HeaderAll}>
          <TitleHeader language={this.props.language}/>
          <div className={s.SideBar}>
            <SideBar/>
          </div>
          <a href={CV} download>
            <span>CV</span>
            <img src={CVLOW} />
          </a>
        </div>
        <HeaderImg dataViews={this.props.dataViews} />
        <Main language={this.props.language} dataCom={this.props.dataCom} />
      </div>
    );
  }
}

export default MainPageRender;
