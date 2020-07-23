import React from "react";

import s from "./Footer.module.sass";

import SrcGithub from "../../Static/Images/Icons/GitHub.png";
import SrcStackOverflow from "../../Static/Images/Icons/StackOverflow.png";
import SrcTelegram from "../../Static/Images/Icons/Telegram.png";
import SrcVk from "../../Static/Images/Icons/Vk.png";
import SrcInst from "../../Static/Images/Icons/Inst.png";
import SrcYouTube from "../../Static/Images/Icons/YouTube.png";

class SideBar extends React.Component {
  render() {
    return (
      <div className={s.SideBar}>
        <a href="https://github.com/SEPEZHO">
          <img src={SrcGithub} alt="" />
        </a>
        <a href="https://stackoverflow.com/users/12073046/sepezho">
          <img src={SrcStackOverflow} alt="" />
        </a>
        <a href="https://t.me/sepezho">
          <img src={SrcTelegram} alt="" />
        </a>
        <a href="https://vk.com/sepezho">
          <img src={SrcVk} alt="" />
        </a>
        <a href="https://www.instagram.com/sepezho">
          <img src={SrcInst} alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ">
          <img src={SrcYouTube} alt="" />
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
