import React from "react";

import s from "./Projects.module.sass";

class ProjectsRepos extends React.Component {
  render() {
    return (
      <div className={s.ProjectsRepos}>
        <div className={s.AllProjects}>
          <div className={s.TopProjects}>
            <div className={s.Name}>Репозиторий</div>
            <div className={s.Branch1}>Ветки</div>
            <div className={s.Descrip}>Описание</div>
            <div className={s.Language}>Язык</div>
            <div className={s.Create}>Создан</div>
            <div className={s.Update}>Последнее обновление</div>
            <div className={s.Size}>Размер (Кб)</div>
          </div>
          {this.props.data}
        </div>
      </div>
    );
  }
}

export default ProjectsRepos;
