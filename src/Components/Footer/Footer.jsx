import React from "react";

import s from "./Footer.module.sass";
import SideBar from "./SideBar.jsx";
import LikeBtn from "./LikeBtn.jsx";
import Text from "./Text.jsx";
import Comments from "./CommentSystem/CommentSystem.jsx";

const Footer = () => {
  return (
    <div className={s.FooterMain}>
      <div className={s.Footer}>
        <SideBar />
        <Text />
        <LikeBtn />
        <Comments />
      </div>
    </div>
  );
};

export default Footer;
