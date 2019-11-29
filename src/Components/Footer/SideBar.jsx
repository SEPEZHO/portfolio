import React from "react";

import s from "./Footer.module.sass";

import SrcGithub from "../../Static/Images/Icons/GitHub.png";
import SrcStackOverflow from "../../Static/Images/Icons/StackOverflow.png";
import SrcYouTube from "../../Static/Images/Icons/YouTube.png";
import SrcVk from "../../Static/Images/Icons/Vk.png";
import SrcMail from "../../Static/Images/Icons/Mail.png";
import SideBarPic from "../../Static/Images/SideBar.png";

const SideBar = () => {
  return (
    <div className={s.SideBar}>
      <img src={SideBarPic} className={s.SideBarPic} alt="" />
      <a href="https://github.com/SEPEZHO">
        <img src={SrcGithub} alt="" />
      </a>
      <a href="https://stackoverflow.com/users/12073046/sepezho">
        <img src={SrcStackOverflow} alt="" />
      </a>
      <a href="https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ/featured?view_as=subscriber">
        <img src={SrcYouTube} alt="" />
      </a>
      <a href="https://vk.com/vlad_ascetic">
        <img src={SrcVk} alt="" />
      </a>
      <a href="/Contact">
        <img src={SrcMail} alt="" />
      </a>
    </div>
  );
};

export default SideBar;
