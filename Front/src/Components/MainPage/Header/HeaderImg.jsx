import React from "react";
import HeaderImg from "../../../Static/Images/Me.png";
import ViewsImg from "../../../Static/Images/Icons/Views.png";

import s from "./Header.module.sass";
import CV from "../../../Static/Images/CV.png";
import CVLOW from "../../../Static/Images/CVLOW.png";

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
      if (window.scrollY > document.documentElement.clientHeight + 500) {
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
        <div className={s.Views}>
          <img alt="" src={ViewsImg} />
          {this.props.dataViews}
        </div>
        <a href={CV} download>
          <span>CV</span>
          <img src={CVLOW} />
        </a>
      </div>
    );
  }
}

export default Header;
