import React from 'react';

import Portfolio from '../../../Static/Images/Projects/Portfolio.png';
import Clicker from '../../../Static/Images/Projects/Clicker.png';
import Life from '../../../Static/Images/Projects/Life.png';
import ShortWay from '../../../Static/Images/Projects/ShortWay.png';

import s from './Main.module.sass';

const MainProjects = () => {

    return (
        <div className={s.Projects}>
        <h1>Лучшие проекты</h1>
        
        <div className={s.Proj}>
      <a href='https://github.com/SEPEZHO/Portfolio'>
      <span className={s.Text} style={{'filter': 'invert(1)'}}>Портфолио</span>
      <span className={s.TextDesc} style={{'filter': 'invert(1)'}}>Это сайт, на котором вы сейчас находитесь. Использовал: react + node js + nginx.</span>
        <img alt='' src={Portfolio} className={s.ProjImg} />
</a>    
    </div>

    <div className={s.Proj1}>
      <a href='https://github.com/SEPEZHO/Clicker'>
      <span className={s.Text}>Кликер</span>
      <span className={s.TextDesc}>Игра кликер, с системой регистрации, входа, и ,соответственно, сохранением игровых данных на сервере. Имеется чат, построенный на защищенных вебсокетах (wss). Использовал: jQuery + php + mysql.</span>
        <img alt='' src={Clicker} className={s.ProjImg} />
</a>    
    </div>

<div className={s.Proj2}>
      <a href='https://github.com/SEPEZHO/Game-OF-life'>
      <span className={s.Text} style={{'filter': 'invert(1)'}}>Игра жизнь</span>
      <span className={s.TextDesc} style={{'filter': 'invert(1)'}}>Стандартная игра жизнь, базируется на canvas. Использовал: jQuery.</span>
        <img alt='' src={Life} className={s.ProjImg}/>
</a>    
    </div>
    <div className={s.Proj3}>
      <a href='https://github.com/SEPEZHO/ShortWay'>
      <span className={s.Text}>Путь</span>
      <span className={s.TextDesc}>Самописный алгоритм нахождения пути от одной точки до другой, на canvas. Использовал: jQuery.</span>
        <img alt='' src={ShortWay} className={s.ProjImg}/>
</a>    
    </div>
    </div>
    )
}

export default MainProjects;