import React from "react";

import WebStap from "../../../Static/Images/Projects/WebStap.png";
import GitHubDocs from "../../../Static/Images/Projects/GitHubDocs.png";
import BoosterGames from "../../../Static/Images/Projects/BoosterGames.png";
import Tests from "../../../Static/Images/Projects/Tests.png";
import Seppass from "../../../Static/Images/Projects/Seppass.png";
import Portfolio from "../../../Static/Images/Projects/Portfolio.png";
import Clicker from "../../../Static/Images/Projects/Clicker.png";
import Life from "../../../Static/Images/Projects/Life.png";
import ShortWay from "../../../Static/Images/Projects/ShortWay.png";
import useResponsive from '../../../Logics/Responsive';
import Tilt from '../../../Logics/Tilt';
import ViewMore from "../../../Static/Images/Icons/ViewMore.png";

import s from "./Main.module.sass";


const ResponsiveCheck = (props) => {
  return props.useResponsive('(min-width: 992px)', true) ? <div className={s.Project_img_div}><Tilt children={<img alt="" src={props.imgName} className={s.Project_img}/>} /></div> : <div className={s.Project_img_div}><img alt="" src={props.imgName} className={s.Project_img}/></div>
}

class MainProjects extends React.Component {
  langSelector = (ru, eng) => {
    if (this.props.language){
      return ru
    }else{
      return eng 
    }
  }
  constructor() {
    super();
    let styleForImg = {};
    this.state = {
      styleForImg: styleForImg,
      idOpen: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => {
    if (!this.isOpen) {
      let styleForImg = {
        transform: "translate(-50%, -25%) rotate(180deg)",
        transformOrigin: "50% 50%"
      };
      this.setState({
        styleForImg: styleForImg
      });
    } else {
      let styleForImg = {
        transform: "translate(-50%, 25%) rotate(0deg)",
        transformOrigin: "50% 50%"
      };
      this.setState({
        styleForImg: styleForImg
      });
    }
    this.isOpen = !this.isOpen;
  };

  render() {
    return (
      <div className={s.Projects}>
        <div className={s.Title}><h1>{this.props.language ? 'Работал над' : 'Worked on'}</h1></div>
        <div className={s.ProjRigth}>
          <a href="https://booster.games/">
            <div className={s.ImageRigth}>
              <h2>Web Stap</h2>
                <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={WebStap} />
            </div>
          </a>
          {
            this.langSelector(
              <div className={s.TextRigth}>
                Это сайт-визитка для одной команды разработчиков. Сам сайт (хоть и является одностраничником) достаточно сложен по части логики.
                В этом проекте реализовано много логики для анимаций / переходов между слайдами / разного рода интерактивных элементов. Занимался
                этим проектом порядка 2х месяцев, за это время втянулся в проект, решил уйму возникших на тот момент проблем, после чего начал
                вносить новую логику. Сайдбар/кнопки, переписал логику переключения слайдов, переписал множество стилей, занимался мобильной версией сайта.
                <br/>
                <br/>
                Использовал: Gatsby; TypeScript; GraphQl; Styled-components; Figma.
              </div>,
              <div className={s.TextRigth}>
                This is a business card site for a development team.
                The site itself, although it is a one-page landing, is quite
                complex in terms of logic. This project has implemented a lot of
                logic for:  animations , transitions between slides,
                various kinds of interactive elements. I was engaged in this
                project for about 2 months, during this time I got involved
                in the project, solved a lot of problems that arose at that time,
                and then started embedding new logic. Among them: sidebar, buttons,
                new logic for switching slides, many new styles and also began
                to work on the mobile version of the website.
                <br/>
                <br/>
                Used: Gatsby; TypeScript; GraphQl; Styled-components; Figma.
              </div>
            )
          }
        </div>

        <div className={s.ProjLeft}>
          <a href="https://booster.games/">
            <div className={s.ImageLeft}>
              <h2>GitHub Docs</h2>
                <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={GitHubDocs} />
            </div>
          </a>
          {
            this.langSelector(
              <div className={s.TextLeft}>
                Open Source проект, в котором я принял участие.
                Занимался решением конкретных тасков, за
                обговоренную плату. Сам проект представляет
                из себя web-приложение, для просмотра и
                редактирования файлов в репозитории юзера
                на GitHub. Проект построен на React + TS +
                Webpack и Pcss и уйме обвязки к этому стэку.
                В нем я работал над стилями,
                а так же написал логику commit changes через
                API GitHub, при сохранении изменений файла.
                <br/>
                <br/>
                Использовал: React; TypeScript; Webpack; Pcss.
              </div>,
              <div className={s.TextLeft}>
                This is an Open Source project that I took part in.
                I was engaged in solving specific tasks, for a negotiated fee.
                The project itself is a web application for viewing and editing
                files in the user's repository on GitHub. The project is built on
                React + TS + Webpack and Pcss (and huge stack of secondary technologies).
                In it, I worked on styles, and also wrote the commit changes logic
                through the GitHub API with saving file changes.
                <br/>
                <br/>
                Used: React; TypeScript; Webpack; Pcss.
              </div>
            )
          }
        </div>

        <div className={s.ProjRigth}>
          <a href="https://booster.games/">
            <div className={s.ImageRigth}>
              <h2>Booster.games</h2>
                <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={BoosterGames} />
            </div>
          </a>
          {
            this.langSelector(
              <div className={s.TextRigth}>
                Это сайт, который является посредником между бустерами и обычными пользователями.
                Я был intern frontend разработчиком, постигал основы Next TypeScript Eslint GraphQl+Apollo и уйму других для меня (на тот момент) новых технологий.
                Научился создавать грамотный, эластичный фронт. Работая с этими ребятами, я занимался созданием персональных страниц (с использованием вышеперечисленных технологий)
                по макетам с Figma, которые отображаются только в профиле пользователя, так что просто перейдя на сайт, мох трудов не увидеть :/
                <br/>
                <br/>
                Использовал: Next; TypeScript; Eslint; GraphQl; Apollo; Figma.
              </div>,
              <div className={s.TextRigth}>
                This site was made for the cooperation between boosters and regular users. I was an intern frontend developer when I've done it.
                I learnt the basics of Next TypeScript Eslint GraphQl+Apollo and other unknown tecnologies.
                I also learned how to create readable and clear frontend code. I was creating the personal pages with a design taken from Figma Layouts.
                Those pages were only used only for users' profiles. Unfortunately, you can`t see the personal pages if you try to go to that site  :/ 
                <br/>
                <br/>
                Used: Next; TypeScript; Eslint; GraphQl; Apollo; Figma.
              </div>
            )
          }
        </div>

        <div className={s.Title}><h1>{this.props.language ? 'Собственные проекты' : 'Own projects'}</h1></div>

        <div className={s.ProjLeft}>
          <a href="https://github.com/SEPEZHO/Tests">
            <div className={s.ImageLeft}>
              <h2>Tests</h2>
              <div className='Project_img_div'>
                <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={Tests} />
              </div>
            </div>
          </a>
          {
            this.langSelector(
              <div className={s.TextLeft}>
                Собрал несколько тестовых заданий, которые я делал для других вакансий. Некоторые из них достаточно сложные.
                К примеру. Cлайдер новостей, над которым пришлось работать по psd макету. Таблица, со своей пагинацией и менюшкой, для отображения данных,
                которые приходят с сервера. Мобильная страница профиля. Последние два тестовых делал по макету из Figma. Все эти тестовые имеют адаптив.
                В основном писал их на TypeScript + Next. Без бэкенда.
                <br/>
                <br/>
                Использовал: TypeScript; Next; AntD; React; React-slick; Sass.
              </div>,
              <div className={s.TextLeft}>
                I collected here a few test tasks I've been working on to apply for a job. Some of them are difficlt though.
                The first one is a News Slider, I created it using the PSD Layouts. The second one is a table with its own pagination and a menu, which basically reflects the data which was sent to the server. 
                The last one is a Mobile Profile Page. The last 2 test tacks were created with Figma.
                All these tests have their own adaptation. Most of the time, I  used TypeScript + Next without the backend.
                <br/>
                <br/>
                Used: TypeScript; Next; AntD; React; React-slick; Sass.
              </div>
            )
          }
        </div>
        

        <div className={s.ProjRigth}>
          <a href="https://seppass.sepezho.com">
            <div className={s.ImageRigth}>
              <h2>Seppass</h2>
              <div className='Project_img_div'>
                <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={Seppass} />
              </div>
            </div>
          </a>
          {
            this.langSelector(
              <div className={s.TextRigth}>
                Телеграм бот предназначен для хранения паролей и других записей.
                Создал бота для себя просто потому что было интересно.
                Сейчас же приостановил этот проект, т.к. довел его до
                рабочего состояния, и дальше развивать его одному очень сложно.
                Каждому пользователю при регистрации создается уникальный gpg-ключ.
                Пароль хранится у юзера, а значит даже при утечке данных, расшифровать
                их не получится ни-ко-му. Так же бот умеет автоматически подвязываться к
                gitHub пользователя, и синхронизировать все данные из папки юзера с git-системой.
                Сверстал под него сайт, на который ведет эта ссылка.
                <br/>
                <br/>
                Использовал: Python3; Telebot; Python-GnuPG; GitPython; SQLite.
                <br/>
                <br/>
                Примерные объемы: 4к строчек кода.
              </div>,
              <div className={s.TextRigth}>
                Telegram bot was made to store and keep in safety users' passwords and other stuff. I created this bot, because it was fun for me doing something new. 
                After I had made Seppas Bot working on its own without my support, I've stopped working on my Seppas Bot. This project has grown up for solo development.
                Every user gets his individual gpg-key after logging in.
                It means that even if data leaks happen, nobody can`t decrypt it. Also Seppass can automatically synchronize all of the encrypted passwords with user's git-system. 
                I created a special site which describes all of this shit. For more info, click here.
                <br/>
                <br/>
                Used: Python3; Telebot; Python-GnuPG; GitPython; SQLite.
                <br/>
                <br/>
                Approximate volumes: 4k lines of code.
              </div>
            )
          }
        </div>

        <div
          className={s.DisplayProjects}
          style={this.isOpen ? {overflow: 'visible', height: 'auto'} : {overflow: 'hidden', height: '0'}}
        >

          <div className={s.ProjLeft}>
            <a href="https://github.com/SEPEZHO/Portfolio">
              <div className={s.ImageLeft}>
                <h2>Portfolio</h2>
                <div className='Project_img_div'>
                  <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={Portfolio} />
                </div>
              </div>
            </a>
            {
              this.langSelector(
                <div className={s.TextLeft}>
                  Сайт, на котором вы сейчас находитесь, второй по масштабам проект.
                  Бэк на NodeJs, фронт на React + sass. Бэкенд каждые 10 минут спрашивает мой gitHub о новых коммитах,
                  репозитроиях и т.д. Запоминает все это в БД (MYSQL). Так же ловит и хранит информацию,
                  которую принимает с фронта. В добавок может отправлять письма через google smtp.
                  Фронт же, работает только с API и ничего больше не трогает. Как вы уже могли заметить, он построен по принципу SPA.
                  <br/>
                  <br/>
                  Использовал: React; Sass; NodeJs; Nginx; MYSQL.
                  <br/>
                  <br/>
                  Примерные объемы: 3.7к строчек кода.
                </div>,
                <div className={s.TextLeft}>
                  The site you are currently on is my second largest project. The backend is based on NodeJS, frontend is  powered by React and SASS.
                  Every 10 minutes the backend checks my gitHub if there're any new commits, repositories, etc. If there're new elements, it saves everything in DB (MYSQL).
                  It also saves some info which it gets from the frontend. The backend can also send the  mails through the Google SMTP.
                  Frontend works only with the API. As you can see, It's based on SPA.
                  <br/>
                  <br/>
                  Used: React; Sass; NodeJs; Nginx; MYSQL.
                  <br/>
                  <br/>
                  Approximate volumes: 3.7k lines of code.
                </div>
              )
            }
          </div>

          <div className={s.ProjRigth}>
            <a href="https://github.com/SEPEZHO/Clicker">
              <div className={s.ImageRigth}>
                <h2>Clicker</h2>
                <div className='Project_img_div'>
                  <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={Clicker} />
                </div>
              </div>
            </a>
              {
                this.langSelector(
                <div className={s.TextRigth}>
                    Веб-игра кликер, с системой регистрации (при помощи проверки почты), входа
                    и, соответственно, сохранением игровых данных на сервере в базе данных.
                    Прикрутил чат, построенный на защищенных вебсокетах (wss), подвязывал при
                    помощи workerman. Использовал composer для php. Проект закинул на полпути,
                    т.к. он становился слишком громоздким. У него был потенциал, но я был слишком
                    "зелен" для таких обьемов работы...
                    <br/>
                    <br/>Использовал: jQuery; PHP; MYSQL.
                    <br/>
                    <br/>Примерные объемы: 2.37к строчек кода.
                </div>,
                <div className={s.TextRigth}>
                    This is a web-clicker game with a registration-system using mail to confirm the actions and an option to save a game data on the server in DB.
                    I attached a chat in-game built on the secure web sockets (wss) by using the WorkerMan. I also used a composer for PHP.
                    I've done only half of this project, because it's way too difficult for me. The Clicker had potential, but I was too young for it.
                    <br/>
                    <br/>
                    Used: jQuery; PHP; MYSQL.
                    <br/>
                    <br/>
                    Approximate volumes: 2.37k lines of code.
                </div>
                )
              }
          </div>

          <div className={s.ProjLeft}>
            <a href="https://github.com/SEPEZHO/Game-OF-life">
              <div className={s.ImageLeft}>
                <h2>Game of life</h2>
                <div className='Project_img_div'>
                  <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={Life} />
                </div>
              </div>
            </a>
              {
                this.langSelector(
                  <div className={s.TextLeft}>
                    Стандартная игра жизнь, базируется на canvas. Является одним
                    из первых веб-приложений. Тогдя я начинал постигать js (и jQuery). Без серверной части.
                    <br/>
                    <br/>
                    Использовал: jQuery.
                    <br/>
                    <br/>
                    Примерные объемы: 0.25к строчек кода.
                  </div>,
                  <div className={s.TextLeft}>
                    This is Game of Life built using Canvas. It was one of the first projects. Those times, I started to learn js (and jQuery). This one was created without using backend.
                    <br/>
                    <br/>
                    Used: jQuery.
                    <br/>
                    <br/>
                    Approximate volumes: 0.25k lines of code.
                  </div>
                )
              }
          </div>

          <div className={s.ProjRigth}>
            <a href="https://github.com/SEPEZHO/Way">
              <div className={s.ImageRigth}>
                <h2>Way</h2>
                <div className='Project_img_div'>
                  <ResponsiveCheck useResponsive={this.props.useResponsive} imgName={ShortWay} />
                </div>
              </div>
            </a>
            {
              this.langSelector(
                <div className={s.TextRigth}>
                  Самописный алгоритм нахождения пути от одной точки до другой, обходя
                  препятствия, написан на canvas. Без серверной части.
                  <br/>
                  <br/>
                  Использовал: jQuery.
                  <br/>
                  <br/>
                  Примерные объемы: 0.26к строчек кода.
                </div>,
                <div className={s.TextRigth}>
                  It's self-written algorithm which finds a proper way between two dots. It bypasses the obstacles. Written on canvas. The backend wasn't used.
                  <br/>
                  <br/>
                  Used: jQuery.
                  <br/>
                  <br/>
                  Approximate volumes: 0.26k lines of code.
                </div>
              )
            }
          </div>
        </div>
        <img
            className={s.ViewMoreProj}
            src={ViewMore}
            style={this.state.styleForImg}
            alt="#"
            onClick={this.handleButtonClick}
        />
      </div>
    );
  }
};

export default (props) => <MainProjects {...props} useResponsive={useResponsive} />;