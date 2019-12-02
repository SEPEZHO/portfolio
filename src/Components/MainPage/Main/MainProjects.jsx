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
        <a href="https://github.com/SEPEZHO/Portfolio">
          <div className={s.Image}>
            <h2>Портфолио</h2>
            <img alt="" src={Portfolio} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.Text}>
          Это сайт, на котором вы сейчас находитесь.
          <br /> Использовал: react + node js + nginx.
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
          Игра кликер, с системой регистрации, входа, и ,соответственно,
          сохранением игровых данных на сервере. Имеется чат, построенный на
          защищенных вебсокетах (wss).
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
          Стандартная игра жизнь, базируется на canvas.
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
          Самописный алгоритм нахождения пути от одной точки до другой, на
          canvas.
          <br /> Использовал: jQuery.
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
