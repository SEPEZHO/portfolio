import React from "react";

import s from "./Footer.module.sass";

import SrcGithub from "../../Static/Images/Icons/GitHub.png";
import SrcStackOverflow from "../../Static/Images/Icons/StackOverflow.png";
import SrcTelegram from "../../Static/Images/Icons/Telegram.png";
import SrcVk from "../../Static/Images/Icons/Vk.png";
import SideBarPic from "../../Static/Images/SideBar.png";
import SrcInst from "../../Static/Images/Icons/Inst.png";

class SideBar extends React.Component {
  render() {
    return (
      <div className={s.SideBar}>
        <img src={SideBarPic} className={s.SideBarPic} alt="" />
        <a href="https://github.com/SEPEZHO">
          <img src={SrcGithub} alt="" />
        </a>
        <a href="https://stackoverflow.com/users/12073046/sepezho">
          <img src={SrcStackOverflow} alt="" />
        </a>
        <a href="https://t.me/sepezho">
          <img src={SrcTelegram} alt="" />
        </a>
        <a href="https://vk.com/vlad_ascetic">
          <img src={SrcVk} alt="" />
        </a>
        <a href="https://www.instagram.com/sepezho">
          <img src={SrcInst} alt="" />
        </a>
        <div
          onClick={() => {
            this.props.pathMain("/Contact");
          }}
        >
        </div>
      </div>
    );
  }
}

export default SideBar;
