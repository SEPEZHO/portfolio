import React from "react";

import s from "./Projects.module.sass";

class Activities extends React.Component {
  render() {
    return (
      <div className={s.Activities}>
        <div className={s.RepAll}>
          <div className={s.Top}>
            <div className={s.Project}>Репозиторий</div>
            <div className={s.Message}>Сообщение</div>
            <div className={s.Date}>Дата</div>
            <div className={s.Time}>Время</div>
          </div>
          {this.props.data}
        </div>
      </div>
    );
  }
}

export default Activities;
