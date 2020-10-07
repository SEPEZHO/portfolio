import React from "react";

import s from "./Projects.module.sass";

class Activities extends React.Component {
  render() {
    return (
      <div className={s.Activities}>
        <div className={s.RepAll}>
          <div className={s.Top}>
            <div className={s.Project}>{this.props.language ? 'Репозиторий' : 'Repository'}</div>
            <div className={s.Branch}>{this.props.language ? 'Веткa' : 'Branch'}</div>
            <div className={s.Message}>{this.props.language ? 'Сообщение' : 'Message'}</div>
            <div className={s.Time}>{this.props.language ? 'Время' : 'Time'}</div>
          </div>
          {this.props.data}
        </div>
      </div>
    );
  }
}

export default Activities;
