import React from "react";
import MainProjects from "./MainProjects.jsx";
import ProjectsTable from "../../Projects/Activities.jsx";
import MainAbout from "./About.jsx";
import ViewMore from "../../../Static/Images/Icons/ViewMore.png";

import sP from "../../Projects/Projects.module.sass";
import s from "./Main.module.sass";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      com: <p style={{ padding: "40px" }}>Loading...</p>
    };
  }
  componentDidMount() {
    this.commits(this.props.dataCom);
  }
  commits(data) {
    let i = 0 ;
    let commits = data.map(repo => {
      return (
        <div key={i++}>
          <hr />
          <div className={sP.Reposit}>
            <div className={sP.Project}>
              <a href={repo.UrlProj}>{repo.Project}</a>
            </div>
            <div className={sP.Message}>
              <a href={repo.UrlCommit}>{repo.Message}</a>
            </div>
            <div className={sP.Date}>{repo.Date.substring(0, 10)}</div>
            <div className={sP.Time}>{repo.Date.substring(11).slice(0, -5)}</div>
          </div>
        </div>
      );
    });
    this.setState({ com: commits });
  }
  render() {
    return (
      <div className={s.Main}>
        <MainAbout />
        <MainProjects />

        <div className={s.Table}>
          <h1>Последняя активность</h1>
          <div className={s.ProjectsTableMain}>
            <ProjectsTable data={this.state.com} />
          </div>
          <img
            className={s.ViewMore}
            src={ViewMore}
            onClick={() => {
              this.props.pathMain("/Projects");
            }}
            alt="#"
          />
        </div>
      </div>
    );
  }
}

export default Main;
