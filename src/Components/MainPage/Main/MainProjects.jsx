import React from "react";

import Seppass from "../../../Static/Images/Projects/Seppass.png";
import Portfolio from "../../../Static/Images/Projects/Portfolio.png";
import Clicker from "../../../Static/Images/Projects/Clicker.png";
import Life from "../../../Static/Images/Projects/Life.png";
import ShortWay from "../../../Static/Images/Projects/ShortWay.png";

import s from "./Main.module.sass";

const MainProjects = () => {
  return (
    <div className={s.Projects}>
      <h1>Лучшие проекты</h1>

      <div className={s.ProjRigth}>
        <a href="https://github.com/SEPEZHO/Seppass_bot">
          <div className={s.ImageRigth}>
            <h2>Бот</h2>
            <img alt="" src={Seppass} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.TextRigth}>
          Телеграм-бот, предназначенный для хранения паролей и других записей. Строю бота для себя, просто потому-что интересно. Каждому пользователю, при регистрации, создается уникальный gpg-ключ. Пароль хранится у юзера, а значит даже при утечке данных, расшифровать их не получится ни-ко-му. Так же умеет автоматически подвязываться к gitHub пользователя, и синхронизировать все данные из папки юзера с git-системой.
          <br /> <br />Использовал: Python3; Telebot; Python-GnuPG; GitPython; SQLite.
          <br /> <br />Примерные обьемы: 3,65к строчек кода.
        </div>
      </div>

      <div className={s.ProjLeft}>
        <a href="https://github.com/SEPEZHO/Seppass_bot">
          <div className={s.ImageLeft}>
            <h2>Портфолио</h2>
            <img alt="" src={Portfolio} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.TextLeft}>
          Сайт, на котором вы сейчас находитесь. Второй по масштабам проект. Бэк на NodeJs, форнт на React. React + аккуратные Sass стили, а так же немного запросов к Api бэка, и аккуратный фронт готов. Но не стоит забывать про не самый сложный, но достаточно надежный бэкенд. Который стоит на отдельном порте и принимает запросы, так же отдает результаты, вообщем работает с информациеей, которую берет с github api или с форнта.
          <br /> <br />Использовал: React; Sass; NodeJs; Nginx; MYSQL.
          <br /> <br />Примерные обьемы: 3,71к строчек кода.
        </div>
      </div>

      <div className={s.ProjRigth}>
        <a href="https://github.com/SEPEZHO/Clicker">
          <div className={s.ImageRigth}>
            <h2>Кликер</h2>
            <img alt="" src={Clicker} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.TextRigth}>
          Веб-игра кликер, с системой регистрации (при помощи проверки почты), входа и, соответственно,
          сохранением игровых данных на сервере в базе данных. Прикрутил чат, построенный на
          защищенных вебсокетах (wss), подязывал при помощи workerman. Использовал composer для php. Проект закинул на полпути, т.к. он становился слишком громоздким.
          У него был потенциал, но я был слишком зелен для таких обьемов работы...
          <br /> <br />Использовал: jQuery; PHP; MYSQL.
          <br /> <br />Примерные обьемы: 2,37к строчек кода.
        </div>
      </div>

      <div className={s.ProjLeft}>
        <a href="https://github.com/SEPEZHO/Game-OF-life">
          <div className={s.ImageLeft}>
            <h2>Игра жизнь</h2>
            <img alt="" src={Life} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.TextLeft}>
          Стандартная игра жизнь, базируется на canvas. Является одним из первых веб-приложений. Тогдя я начинал постигать js (и jQuery). Без серверной части.
          <br /><br />Использовал: jQuery.
          <br /> <br />Примерные обьемы: 0,25к строчек кода.
        </div>
      </div>

      <div className={s.ProjRigth}>
        <a href="https://github.com/SEPEZHO/ShortWay">
          <div className={s.ImageRigth}>
            <h2>Путь</h2>
            <img alt="" src={ShortWay} className={s.ProjImg} />
          </div>
        </a>
        <div className={s.TextRigth}>
          Самописный алгоритм нахождения пути от одной точки до другой, обходя препятствия, написан на
          canvas. Без серверной части.
          <br /><br /> Использовал: jQuery.
          <br /> <br />Примерные обьемы: 0,26к строчек кода.
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
