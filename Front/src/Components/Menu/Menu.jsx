import React from "react";
import { Link, useLocation } from "react-router-dom"

import s from "./Menu.module.sass";
class Menu extends React.Component {
  constructor() {
    super();
    let styleForOpenMen = {
      height: 0
    };
    let styleForBut = {
      boxShadow: "0 0 10px black"
    };
    let styleForBut1 = {
      top: "6.25px",
      transform: "rotate(0deg)"
    };
    let styleForBut2 = {
      top: "17.25px",
      transform: "rotate(0deg)"
    };
    let styleForBut3 = {
      bottom: "6.25px",
      transform: "rotate(0deg)"
    };
    let StyleForMenu = {
      background: "none",
      boxShadow: "0 0 10px black"
    };
    let StyleForMenuForContact = {
      background: "white",
      boxShadow: "0 0 10px black"
    };
    this.state = {
      StyleForMenu: StyleForMenu,
      StyleForMenuForContact: StyleForMenuForContact,
      isOpen: false,
      styleForOpenMen: styleForOpenMen,
      styleForBut: styleForBut,
      styleForBut1: styleForBut1,
      styleForBut2: styleForBut2,
      styleForBut3: styleForBut3
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.documentElement.clientHeight * 0.2) {
        this.setState({
          StyleForMenu: {
            background: "white",
            boxShadow: "0 0 10px black"
          }
        });
      } else {
        this.setState({
          StyleForMenu: {
            background: "none",
            boxShadow: "0 0 10px black"
          }
        });
      }
    });
  };

  openMenu = () => {
    if (this.state.isOpen) {
      this.menuClose();
    } else {
      let styleForOpenMen = {
        height: "250px",
        boxShadow: "0 0 10px black"
      };
      let styleForBut = {
        boxShadow: "none"
      };
      let styleForBut1 = {
        top: "17.25px",
        transform: "rotate(-45deg)"
      };
      let styleForBut2 = {
        top: "17.25px",
        transform: "rotate(45deg)"
      };
      let styleForBut3 = {
        top: "17.25px",
        transform: "rotate(45deg)"
      };
      this.setState({
        isOpen: true,
        styleForOpenMen: styleForOpenMen,
        styleForBut: styleForBut,
        styleForBut1: styleForBut1,
        styleForBut2: styleForBut2,
        styleForBut3: styleForBut3
      });
    }
  };

  menuClose = () => {
    let styleForOpenMen = {
      height: 0
    };
    let styleForBut = {
      boxShadow: "0 0 10px black"
    };
    let styleForBut1 = {
      top: "6.25px",
      transform: "rotate(0deg)"
    };
    let styleForBut2 = {
      top: "17.25px",
      transform: "rotate(0deg)"
    };
    let styleForBut3 = {
      bottom: "6.25px",
      transform: "rotate(0deg)"
    };
    this.setState({
      isOpen: false,
      styleForOpenMen: styleForOpenMen,
      styleForBut: styleForBut,
      styleForBut1: styleForBut1,
      styleForBut2: styleForBut2,
      styleForBut3: styleForBut3
    });
  };
  render() {
    return (
      <div>
        <div
          style={
            this.props.location.pathname === "/"
              ? this.state.StyleForMenu
              : this.state.StyleForMenuForContact
          }
          className={s.MenuForPc}
        >
          <div className={s.MenuMax}>

            <Link to="/">
              <div className={s.Main}>
                <div></div>
                <span>{this.props.language ? 'Главная' : 'Main'}</span>
              </div>
            </Link>

            <Link to="/Projects">
              <div className={s.Projects}>
                <div></div>
                <span>{this.props.language ? 'Проекты' : 'Projects'}</span>
              </div>
            </Link>

            <Link to="/Contact">
              <div className={s.Contact}>
                <div></div>
                <span>{this.props.language ? 'Контакты' : 'Contacts'}</span>
              </div>
            </Link>
          </div>
        </div>

        <div className={s.MenuForPhone} style={this.state.styleForOpenMen}>
          
          <Link to="/">
            <div
              className={s.MainPhone}
              onClick={() => {
                this.menuClose();
              }}
            >
              <span>Главная</span>
            </div>
          </Link>
          
          <Link to="/Projects">
            <div
              className={s.ProjectsPhone}
              onClick={() => {
                this.menuClose();
              }}
            >
              <span>Проекты</span>
            </div>
          </Link>

          <Link to="/Contact">
            <div
              className={s.ContactPhone}
              onClick={() => {
                this.menuClose();
              }}
            >
              <span>Контакт</span>
            </div>
          </Link>

        </div>
        <div
          className={s.ButtonOpen}
          style={this.state.styleForBut}
          onClick={this.openMenu}
        >
          <div className={s.Button1} style={this.state.styleForBut1} />
          <div className={s.Button2} style={this.state.styleForBut2} />
          <div className={s.Button3} style={this.state.styleForBut3} />
        </div>
      </div>
    );
  }
}

export default () => {
  const location = useLocation();
  return (
      <Menu location={location} />
  )
}