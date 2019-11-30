import React from "react";

import SideBar from "../Footer/SideBar.jsx";
import HeaderImg from "./Header/HeaderImg.jsx";
import Main from "./Main/Main.jsx";
import TitleHeader from "./Header/TitleHeader.jsx";

import s from "./Header/Header.module.sass";

class MainPageRender extends React.Component {
  render() {
    return (
      <div>
        <div className={s.HeaderAll}>
          <TitleHeader />
          <div className={s.SideBar}>
            <SideBar />
          </div>
        </div>
        <HeaderImg />
        <Main pathMain={this.props.pathMain} dataCom={this.state.dataCom}/>
      </div>
    );
  }
}

export default MainPageRender;
