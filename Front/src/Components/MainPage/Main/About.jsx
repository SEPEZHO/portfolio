import React from "react";
import Left from "../../../Static/Images/Arrows/Left.png";
import Center from "../../../Static/Images/Arrows/Center.png";
import Rigth from "../../../Static/Images/Arrows/Rigth.png";

import s from "./Main.module.sass";

class MainAbout extends React.Component {

  langSelector = (ru, eng) => {
    if (this.props.language){
      return ru
    }else{
      return eng 
    }
  }

  render() {
      return (<div className={s.About}>
      {
        this.langSelector(
          <div className={s.MeText}>
            <h1 className={s.AboutMeTitle}>О себе</h1>
            <span>
              Привет, неизвестный мне читатель.
              <br/>
              <br/>
              Моим хобби является программирование (в частности фронтенд).
              Я ходил в "школу программистов" почти три года, и мне оставалось
              доучиться еще год до получения "корочки", но я ушел, ибо мне стало
              слишком скучно (быть может я ее перерос). Программирование, полностью
              по своей инициативе, я начал изучать примерно с ноября 2018.
              В июне 2020 закончил писать <a href="https://seppass.sepezho.com">бота</a> для
              телеграм на питоне. Он умеет шифровать записи gpg ключами,
              и синхронить все с git-системой пользователя, полностью автомотически.
              Проект очень интересный (особенно для джуна, кем я себя и позицианирую),
              но рассказывать о нем здесь я не буду, ведь я создал простенький сайт с его описанием
              , перейдя на который можно прочитать подробней о seppass. Сейчас хочу выйти на фриланс, но это очень сложно :/.
              Иногда занимаюсь хардвером (строю лазерный чпу + уже сделал матрицу 8*8). Имею опыт работы 1.5 месяца
              начинающим фронтенд разработчиком <a href="https://booster.games/">booster games</a>. Очень хорошо
              знаком с линуксом, и git - системами. Посмотреть на то чем я занят,
              подробней, чем просто репозитории на гите, можно в моих 
              сторисах <a href="https://vk.com/sepezho">vk</a> или 
              на <a href="https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ">youtube</a>.
              А так же можно почитать мои заметки о жизненных ситуациях и работе
              на моем <a href="https://t.me/sepezho_log">telegram канале</a>.
              <br/>
              <br/>
              Думаю на этом можно закончить.
            </span>
            <p>(Последнее изменение 11.09.2020)</p>
          </div>,
          <div className={s.MeText}>
            <h1 className={s.AboutMeTitle}>About me</h1>
            <span>
              Hello, an unknown reader.
              <br/>
              <br/>
              I do programming by myself (frontend).
              I have studied CS in the “School Of Programming” for almost 3 years.
              I quit the school last year, because basically the classes were way too boring for me (I think I grew up mostly).
              I started learning CS on my own in November, 2018. I also did my own Telegram Python <a href="https://seppass.sepezho.com">Bot</a> which had been done in June, 2020.
              It can encrypt and decrypt the strings by using gpg-keys. Also It can automatically synchronize all of the encrypted passwords with the user git-system.
              In my opinion, this is very difficult project for Junior. So specially for this project, I created one simple site where my bot "Seppas" is described.
              Nowadays, I want to start working as a Freelancer, but for now it's too difficult for me :/
              Sometimes I work with the hardware projects (laser CNC machine + I've already done a  8*8 matrix).
              I have 1.5 months of remote intern frontend working experience in  <a href="https://booster.games/">booster games</a>. 
              I think, I'm proficient in the Git-systems and Linux. If you want to see more info than my Github has, go ahead and check my <a href="https://vk.com/sepezho">VK</a> stories or <a href="https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ">YouTube Channel</a>. 
              Moreover, you can check the notes about my life and work in the <a href="https://t.me/sepezho_log">Telegram Channel</a>.
              <br/>
              <br/>
              I think that's all.
            </span>
            <p>(Last changes 11.09.2020)</p>
          </div>
        )
      }
      <h1 className={s.SepezhoTitle}>{this.props.language ? 'Работал с' : 'Worked with'}</h1>
      <div className={s.Sepezho}>
        <img alt="" src={Left} className={s.Left}/>
        <div className={s.LeftText}>
          Frontend:
          <br/>
          <br/>
          <ul>
            <li>React</li>
            <li>Next</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>SASS</li>
            <li>Antd</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>jQuery</li>
          </ul>
        </div>
        <img alt="" src={Center} className={s.Center}/>
        <div className={s.CenterText}>
          Backend:
          <br/>
          <br/>
          <ul>
            <li>Pyhton3</li>
            <li>Telebot</li>
            <li>Node js</li>
            <li>SQLite</li>
            <li>MYSQL</li>
            <li>Gihub Api</li>
            <li>Nginx</li>
            <li>GPG</li>
            <li>WSS</li>
            <li>SMTP Gmail</li>
            <li>LAMP</li>
            <li>SSL</li>
            <li>PHP</li>
          </ul>
        </div>
        <img alt="" src={Rigth} className={s.Rigth}/>
        <div className={s.RigthText}>
          Other:
          <br/>
          <br/>
          <ul>
            <li>Hardware dev</li>
            <li>Primere pro</li>
            <li>Photoshop</li>
            <li>Arduino</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </div>);
  }
};

export default MainAbout;
