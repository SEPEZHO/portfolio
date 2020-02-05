import React from "react";

import Portfolio from "../../../Static/Images/Projects/Portfolio.png";
import Clicker from "../../../Static/Images/Projects/Clicker.png";
import Life from "../../../Static/Images/Projects/Life.png";
import ShortWay from "../../../Static/Images/Projects/ShortWay.png";

import s from "./Main.module.sass";

const MainProjects = () => {
  return (
    <div className={s.Projects}>
      <h1>Лучшие проекты</h1>

      <div className={s.Proj}>
        <a href="https://github.com/SEPEZHO/Seppass_bot">
          <div className={s.Image}>
            <h2>Бот</h2>
            <img alt="" src={Portfolio} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.Text}>
          Телеграм бот, предназначенный для упрощения хранения паролей. Полностю бэкенд код (на Python3), с использованием библиотеки Telebot. Каждую запись шифрует индивидуальным gpg ключем.
          <br /> Использовал: Python3 + Telebot + gpg + sqlite.
        </div>
      </div>

      <div className={s.Proj1}>
        <a href="https://github.com/SEPEZHO/Clicker">
          <div className={s.Image1}>
            <h2>Кликер</h2>
            <img alt="" src={Clicker} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.Text1}>
          Игра кликер, с системой регистрации (при помощи почты), входа, и, соответственно,
          сохранением игровых данных на сервере. Имеется чат, построенный на
          защищенных вебсокетах (wss). Проект закинул на полпути, т.к. он становился слишком громоздким.
          <br /> Использовал: jQuery + php + mysql.
        </div>
      </div>

      <div className={s.Proj}>
        <a href="https://github.com/SEPEZHO/Game-OF-life">
          <div className={s.Image}>
            <h2>Игра жизнь</h2>
            <img alt="" src={Life} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.Text}>
          Стандартная игра жизнь, базируется на canvas. Является одним из первых сайтов. Тогдя я начинал постигать js (и jQuery). Без сервера.
          <br />
          Использовал: jQuery.
        </div>
      </div>

      <div className={s.Proj1}>
        <a href="https://github.com/SEPEZHO/ShortWay">
          <div className={s.Image1}>
            <h2>Путь</h2>
            <img alt="" src={ShortWay} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.Text1}>
          Самописный алгоритм нахождения пути от одной точки до другой, обходя препятствия, написан на
          canvas. Тоже без серверной части.
          <br /> Использовал: jQuery.
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
