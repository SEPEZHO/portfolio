import React from "react";
import HeaderImg from "../../../Static/Images/Me.jpg";

import s from "./Header.module.sass";

class Header extends React.Component {
  constructor() {
    super();
    let Style = {
      display: "block"
    };
    this.state = {
      Style: Style
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.documentElement.clientHeight + 200) {
        this.setState({
          Style: {
            display: "none"
          }
        });
      } else {
        this.setState({
          Style: {
            display: "block"
          }
        });
      }
    });
  };

  render() {
    return (
      <div className={s.Header}>
        <img alt="" style={this.state.Style} src={HeaderImg} />
      </div>
    );
  }
}

export default Header;
