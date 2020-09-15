import React from "react";

import ProjectsRepos from "./ProjectsRepos.jsx";
import s from "./Projects.module.sass";

class Text extends React.Component {
  render() {
    return (
      <div className={s.Text}>
        <div className={s.ProjectsReposMain}>
          <h1>{this.props.language ? 'Репозитории' : 'Repositoryes'}</h1>
        </div>
        <ProjectsRepos language={this.props.language} data={this.props.data} />
      </div>
    );
  }
}

export default Text;
