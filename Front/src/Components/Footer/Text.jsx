import React from "react";

import s from "./Footer.module.sass";

class Text extends React.Component {
  render() {
    return (
      <div className={s.Text}>
        <h1>Created by sepezho</h1>
        <div>
        {this.props.language ? 'Время создания' : 'Time of creation'}:
          <nav>
            <li>{this.props.language ? 'С' : 'From'}: 1.09.2019</li>
            <li>{this.props.language ? 'До' : 'To'}: 23.12.2019</li>
            <li>{this.props.language ? 'Правки' : 'Edits'}: 13.09.2020</li>
          </nav>
          <br />
          <br />
          {this.props.language ? 'Почта' : 'Mail'}:
          <nav>
            <li>sepezho@gmail.com</li>
            <li>koko2kocit@gmail.com</li>
          </nav>
          <br />
          <br />
          Telegram:
          <nav>
            <li>@sepezho</li>
          </nav>
        </div>
      </div>
    );
  }
};

export default Text;
