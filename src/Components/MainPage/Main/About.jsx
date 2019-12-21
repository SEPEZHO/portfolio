import React from "react";
import Left from "../../../Static/Images/Arrows/Left.png";
import Center from "../../../Static/Images/Arrows/Center.png";
import Rigth from "../../../Static/Images/Arrows/Rigth.png";

import s from "./Main.module.sass";

const MainAbout = () => {
  return (
    <div className={s.About}>
      <div className={s.MeText}>
        <h1 className={s.AboutMeTitle}>О себе</h1>
<<<<<<< HEAD
        <span>
          Я школьник десятого класса. Моим хобби является веб-программирование.
          Оно появилось у меня на курсах по программированию, но вскоре я
          "перерос" эти курсы и меня перестала интересовать та программа (она
          была легкой для меня). Учитывая цену этих курсов, на которые я не
          доходил всего год до получения "корочки", я решил уйти в самообучение.
          С тех пор (почти год) каждый день (по 2-7 часов) пишу сайты для себя,
          тем самым учась. Все прошлое лето я потратил на свой проект-кликер,
          который был для меня чем-то вроде: "а что если я выложусь на полную".
          Процесс создания его для меня был исполинским трудом. Сейчас я
          занимаюсь написанием своего портфолио, параллельно пытаясь собрать
          материал для старта канала на ютуб, чтобы вести подобие дневника своих
          проектов.
        </span>
      </div>
      <h1 className={s.SepezhoTitle}>Чем занимаюсь</h1>
=======
          <span>Я школьник десятого класса. Моим хобби является веб-программирование. Оно появилось у меня на курсах по программированию, но вскоре я "перерос" эти курсы и меня перестала интересовать та программа (она была легкой для меня). 
          Учитывая цену этих курсов, на которые я не доходил всего год до получения "корочки", я решил уйти в самообучение. С тех пор (почти год) каждый день (по 2-7 часов) пишу сайты для себя, тем самым учась. Все прошлое лето я потратил на свой проект-кликер, который был для меня чем-то вроде: "а что если я выложусь на полную".  Процесс создания его для меня был исполинским трудом. Сейчас я занимаюсь написанием своего портфолио, параллельно пытаясь собрать материал для старта канала на ютуб, чтобы вести подобие дневника своих проектов.
          </span>
        </div>
        <h1 className={s.SepezhoTitle}>Чем занимаюсь</h1>
>>>>>>> master
      <div className={s.Sepezho}>
        <img alt="" src={Left} className={s.Left} />
        <div className={s.LeftText}>
          Фронтэнд:
          <br />
          <br />
          <ul>
            <li>React;</li>
            <li>jQuery;</li>
            <li>AJAX;</li>
            <li>SPA;</li>
            <li>SASS;</li>
            <li>HTML 5;</li>
            <li>CSS 3;</li>
            <li>Bootstrap;</li>
          </ul>
        </div>
        <img alt="" src={Center} className={s.Center} />
        <div className={s.CenterText}>
          Бэкенд:
          <br />
          <br />
          <ul>
            <li>Websocets + HTTPS (wss);</li>
            <li>PHP;</li>
            <li>Node js;</li>
            <li>MYSQL;</li>
            <li>Gihub Api;</li>
            <li>Nginx;</li>
            <li>LAMP;</li>
            <li>SSH;</li>
            <li>FTP;</li>
            <li>SSL;</li>
          </ul>
        </div>
        <img alt="" src={Rigth} className={s.Rigth} />
        <div className={s.RigthText}>
          Другое:
          <br />
          <br />
          <ul>
            <li>Arduino;</li>
            <li>Photoshop;</li>
            <li>Sony vegas;</li>
            <li>Собираю всякие железяки;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
