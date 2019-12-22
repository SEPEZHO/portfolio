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
        <span>
          Привет, неизвестный мне читатель.
          <br />
          <br />
          На данный момент (22.12.2019) я школьник 10 класса, но помимо школы у
          меня есть хобби, на которое я стараюсь выделять то двух часов в день.
          Этим хобби является веб-программирование. Я ходил в "школу
          программистов" почти три года, и мне оставалось доучиться еще год, до
          получения "корочки", но я ушел, ибо мне стало слишком скочно (быть
          может я ее перерос). Программирование, полностью на своей инициативе,
          я начал изучать с 15 лет (примерно с ноября 2018). Помимо написания
          кода мне очень интересно что-то масетрить своими руками. У меня есть
          пару проектов с arduino, в стадии разработки.
          <br />
          <br />
          Думаю на этом можно закончить, о моих проектах можно узнать у меня на
          гитхабе.
        </span>
      </div>
      <h1 className={s.SepezhoTitle}>С чем имел дело</h1>
      <div className={s.Sepezho}>
        <img alt="" src={Left} className={s.Left} />
        <div className={s.LeftText}>
          Фронтэнд:
          <br />
          <br />
          <ul>
            <li>Bootstrap;</li>
            <li>HTML 5;</li>
            <li>jQuery;</li>
            <li>CSS 3;</li>
            <li>React;</li>
            <li>SASS;</li>
            <li>AJAX;</li>
            <li>SPA;</li>
          </ul>
        </div>
        <img alt="" src={Center} className={s.Center} />
        <div className={s.CenterText}>
          Бэкенд:
          <br />
          <br />
          <ul>
            <li>Websocets + HTTPS (wss);</li>
            <li>SMTP Gmail;</li>
            <li>Gihub Api;</li>
            <li>Node js;</li>
            <li>MYSQL;</li>
            <li>Nginx;</li>
            <li>LAMP;</li>
            <li>PHP;</li>
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
            <li>Собираю всякие железяки;</li>
            <li>Sony vegas;</li>
            <li>Photoshop;</li>
            <li>Arduino;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;

// Я школьник десятого класса. Моим хобби является веб-программирование.
// Оно появилось у меня на курсах по программированию, но вскоре я
// "перерос" эти курсы и меня перестала интересовать та программа (она
// была легкой для меня). Учитывая цену этих курсов, на которые я не
// доходил всего год до получения "корочки", я решил уйти в самообучение.
// С тех пор (почти год) каждый день (по 2-7 часов) пишу сайты для себя,
// тем самым учась. Все прошлое лето я потратил на свой проект-кликер,
// который был для меня чем-то вроде: "а что если я выложусь на полную".
// Процесс создания его для меня был исполинским трудом. Сейчас я
// занимаюсь написанием своего портфолио, параллельно пытаясь собрать
// материал для старта канала на ютуб, чтобы вести подобие дневника своих
// проектов.
