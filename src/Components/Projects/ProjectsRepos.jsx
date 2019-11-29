import React from "react";

import s from "./Projects.module.sass";

class ProjectsRepos extends React.Component {
  render() {
    return (
      <div className={s.ProjectsRepos}>
        <div className={s.AllProjects}>
          <div className={s.TopProjects}>
            <div className={`${s.Name} ${s.Block}`}>Репозиторий</div>
            <div className={`${s.Descrip} ${s.Block}`}>Описание</div>
            <div className={`${s.Language} ${s.Block}`}>Язык</div>
            <div className={`${s.Create} ${s.Block}`}>Создан</div>
            <div className={`${s.Update} ${s.Block}`}>Последнее обновление</div>
            <div className={`${s.Size} ${s.Block}`}>Размер (Кб)</div>
          </div>
          {this.props.data}
        </div>
      </div>
    );
  }
}

export default ProjectsRepos;
