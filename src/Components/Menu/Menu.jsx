import React from "react";

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
      top: "10px",
      transform: "rotate(0deg)"
    };
    let styleForBut2 = {
      top: "22.5px",
      transform: "rotate(0deg)"
    };
    let styleForBut3 = {
      bottom: "10px",
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
      location: "/Main",
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
        top: "22.5px",
        transform: "rotate(-45deg)"
      };
      let styleForBut2 = {
        top: "22.5px",
        transform: "rotate(45deg)"
      };
      let styleForBut3 = {
        bottom: "22.5px",
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
      top: "10px",
      transform: "rotate(0deg)"
    };
    let styleForBut2 = {
      top: "22.5px",
      transform: "rotate(0deg)"
    };
    let styleForBut3 = {
      bottom: "10px",
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
            this.props.path === "/Main"
              ? this.state.StyleForMenu
              : this.state.StyleForMenuForContact
          }
          className={s.MenuForPc}
        >
        <div className={s.MenuMax}>
          <div
            className={s.Main}
            onClick={() => {
              this.props.pathMain("/Main");
            }}
          >
            <div></div>
            <span>Главная</span>
          </div>
          <div
            className={s.Projects}
            onClick={() => {
              this.props.pathMain("/Projects");
            }}
          >
            <div></div>
            <span>Проекты</span>
          </div>
            <div
              className={s.Contact}
              onClick={() => {
                this.props.pathMain("/Contact");
              }}
            >
            <div></div>
              <span>Контакт</span>
          </div>
        </div>
        </div>

        <div className={s.MenuForPhone} style={this.state.styleForOpenMen}>
          <div
            className={s.ContactPhone}
            onClick={() => {
              this.props.pathMain("/Contact");
              this.menuClose();
            }}
          >
            <span>Контакт</span>
          </div>

          <div
            className={s.MainPhone}
            onClick={() => {
              this.props.pathMain("/Main");
              this.menuClose();
            }}
          >
            <span>Главная</span>
          </div>

          <div
            className={s.ProjectsPhone}
            onClick={() => {
              this.props.pathMain("/Projects");
              this.menuClose();
            }}
          >
            <span>Проекты</span>
          </div>
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

export default Menu;
