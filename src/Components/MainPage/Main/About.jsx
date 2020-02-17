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
          На момент написания этого текста я являюсь школьником 
          10 класса, но помимо школы у меня есть хобби, на которое 
          я стараюсь выделять от двух часов в день. Этим хобби является 
          программирование (в частности бэкенд). Я ходил в "школу программистов" 
          почти три года, и мне оставалось доучиться еще год до получения 
          "корочки", но я ушел, ибо мне стало слишком скучно (быть может я ее перерос). 
          Программирование, полностью по своей инициативе, я начал изучать с 15 лет 
          (примерно с ноября 2018). Сейчас пишу бота для телеграм на питоне. Бот, 
          который будет шифровать записи gpg ключами. Это уже полностью бэкенд 
          программирование, и мне это нравиться. Посмотреть на то чем я занят, подробней, 
          чем просто репозиторий на гите, можно в моем <a href="https://www.instagram.com/sepezho">instagram</a> или на <a href="https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ">youtube</a>.
          <br />
          <br />
          Думаю на этом можно закончить.
        </span>
          <p>(22.12.2019)</p>
      </div>
      <h1 className={s.SepezhoTitle}>С чем имел дело</h1>
      <div className={s.Sepezho}>
        <img alt="" src={Left} className={s.Left} />
        <div className={s.LeftText}>
          Фронтенд:
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
            <li>Pyhton3;</li>
            <li>Telebot;</li>
            <li>MYSQL;</li>
            <li>Nginx;</li>
            <li>LAMP;</li>
            <li>GPG;</li>
            <li>SSL;</li>
            <li>PHP;</li>
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
