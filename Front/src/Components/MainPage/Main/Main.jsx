import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom"

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
    let i = 0;
    let commits = data.map(repo => {
      return (
        <div key={i++}>
          <hr />
          <div className={sP.Reposit}>
            <div className={sP.Project}>
              <a href={repo.UrlProj}>{repo.Project}</a>
            </div>
            <div className={sP.Branch}>{repo.Branch}</div>
            <div className={sP.Message}>
              <a href={repo.UrlCommit}>{repo.Message}</a>
            </div>
            <div className={sP.Time}>
              {dayjs(repo.Date).format('MMM DD, YYYY h:mm A')}
            </div>
          </div>
        </div>
      );
    });
    this.setState({ com: commits });
  }
  render() {
    return (
      <div className={s.Main}>
        <MainAbout language={this.props.language} />
        <MainProjects language={this.props.language} />

        <div className={s.Table}>
          <h1>{this.props.language ? 'Последняя активность' : 'Last activity'}</h1>
          <div className={s.ProjectsTableMain}>
            <ProjectsTable data={this.state.com} />
          </div>
          <Link to="Projects">
            <img
              className={s.ViewMore}
              src={ViewMore}
              alt="#"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
