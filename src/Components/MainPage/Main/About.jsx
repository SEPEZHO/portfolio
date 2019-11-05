import React from 'react';
import Left from '../../../Static/Images/Arrows/Left.png';
import Center from '../../../Static/Images/Arrows/Center.png';
import Rigth from '../../../Static/Images/Arrows/Rigth.png';

import s from './Main.module.sass';

const MainAbout = () => {
    return (
      <div className={s.About}>
        <h1>О себе</h1>
        <div className={s.MeText}>
        Я школьник десятого класса. Моим хобби является веб-программирование. Оно появилось у меня на курсах по программированию, но вскоре я "перерос" эти курсы и меня перестала интересовать та программа (она была легкой для меня). 
          Учитывая цену этих курсов, на которые я не доходил всего год до получения "корочки", я решил уйти в самообучение. С тех пор (почти год) каждый день (по 2-7 часов) пишу сайты для себя, тем самым учась. Все прошлое лето я потратил на свой проект-кликер, который был для меня чем-то вроде: "а что если я выложусь на полную".  Процесс создания его для меня был исполинским трудом. Сейчас я занимаюсь написанием своего портфолио, параллельно пытаясь собрать материал для старта канала на ютуб, чтобы вести подобие дневника своих проектов.
        </div>
        <h1 className={s.SepezhoTitle}>Чем занимаюсь</h1>
      <div className={s.Sepezho}>
              <img alt="" src={Left} className={s.Left}/>
              <div className={s.LeftText}>
              Frontend:
              <ul>
                <li>node js;</li>
                <li>react;</li>
                <li>jQuery;</li>
                <li>AJAX;</li>
                <li>SPA;</li>
              </ul>
              </div>
              <img alt="" src={Center} className={s.Center}/>
              <div className={s.CenterText}>
              Backend:
              <ul>
                <li>websocets+https(wss);</li>
                <li>php;</li>
                <li>MYSQL;</li>
                <li>Gihub Api;</li>
                <li>SSH;</li>
                <li>SSL;</li>
              </ul>
            </div>
              <img alt="" src={Rigth} className={s.Rigth}/>
                <div className={s.RigthText}>
                Other:
                <ul>
                  <li>Arduino;</li>
                  <li>Собрал пк в 12 лет;</li>
                  <li>Постоянно совершенствую рабочее место;</li>
                  <li>Увлекаюсь железяками в целом;</li>
                </ul>
            </div>
    </div>
    </div>
    )
}

export default MainAbout;