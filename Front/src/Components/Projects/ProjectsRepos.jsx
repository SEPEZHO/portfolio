import React from "react";

import s from "./Projects.module.sass";

class ProjectsRepos extends React.Component {
  render() {
    return (
      <div className={s.ProjectsRepos}>
        <div className={s.AllProjects}>
          <div className={s.TopProjects}>
            <div className={s.Name}>{this.props.language ? 'Репозиторий' : 'Repository'}</div>
            <div className={s.Branch1}>{this.props.language ? 'Ветки' : 'Branches'}</div>
            <div className={s.Descrip}>{this.props.language ? 'Описание' : 'Description'}</div>
            <div className={s.Language}>{this.props.language ? 'Язык' : 'Language'}</div>
            <div className={s.Create}>{this.props.language ? 'Создан' : 'Created'}</div>
            <div className={s.Update}>{this.props.language ? 'Последнее обновление' : 'Last update'}</div>
            <div className={s.Size}>{this.props.language ? 'Размер (Кб)' : 'Size (Kb)'}</div>
          </div>
          {this.props.data}
        </div>
      </div>
    );
  }
}

export default ProjectsRepos;
