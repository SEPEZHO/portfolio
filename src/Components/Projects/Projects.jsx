import React from "react";

import Activities from "./Activities.jsx";
import ProjectsText from "./ProjectsText.jsx";
import ViewMore from "../../Static/Images/Icons/ViewMore.png";

import s from "./Projects.module.sass";

class Projects extends React.Component {
  constructor() {
    super();
    let styleForImg = {};
    this.state = {
      styleForImg: styleForImg,
      tableOpen: false,
      com: <p style={{ padding: "40px" }}>Loading...</p>,
      rep: <p style={{ padding: "40px" }}>Loading...</p>
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => {
    if (!this.tableOpen) {
      let styleForImg = {
        transform: "translate(-50%, -25%) rotate(180deg)",
        transformOrigin: "50% 50%"
      };
      this.setState({
        styleForImg: styleForImg
      });
      this.commits(this.props.dataRepCom.dataComOld);
    } else {
      let styleForImg = {
        transform: "translate(-50%, 25%) rotate(0deg)",
        transformOrigin: "50% 50%"
      };
      this.setState({
        styleForImg: styleForImg
      });
      this.commits(this.props.dataRepCom.dataCom);
    }
    this.tableOpen = !this.tableOpen;
  };

  componentDidMount() {
    this.commits(this.props.dataRepCom.dataCom);
    this.repos(this.props.dataRepCom.dataRes);
  }
  branchesParse = repo => {
    let branches = "";
    JSON.parse(repo.Branches).forEach(branch => {
      branches += "<p>" + branch + "</p>";
    });
    let bro = { __html: branches };
    return <div dangerouslySetInnerHTML={bro}></div>;
  };
  repos(data) {
    let i = 0;
    let repositories = data.map(repo => {
      return (
        <div key={i++}>
          <hr />
          <div className={s.RepositProjects}>
            <div className={s.Name}>
              <a href={repo.Url}>{repo.Name}</a>
            </div>
            <div className={s.Branch1}>{this.branchesParse(repo)}</div>
            <div className={s.Descrip}>{repo.Description}</div>
            <div className={s.Language}>{repo.Language}</div>
            <div className={s.Create}>{repo.CreateAt.substring(0, 10)}</div>
            <div className={`${s.Update} ${s.Block}`}>
              {repo.LastUpdate.substring(0, 10)}
            </div>
            <div className={s.Size}>{repo.Size}</div>
          </div>
        </div>
      );
    });
    this.setState({ rep: repositories });
  }

  commits(data) {
    let i = 0;
    let commits = data.map(repo => {
      return (
        <div key={i++}>
          <hr />
          <div className={s.Reposit}>
            <div className={s.Branch}>{repo.Branch}</div>
            <div className={s.Project}>
              <a href={repo.UrlProj}>{repo.Project}</a>
            </div>
            <div className={s.Message}>
              <a href={repo.UrlCommit}>{repo.Message}</a>
            </div>
            <div className={s.Date}>{repo.Date.substring(0, 10)}</div>
            <div className={s.Time}>{repo.Date.substring(11).slice(0, -5)}</div>
          </div>
        </div>
      );
    });
    this.setState({ com: commits });
  }

  render() {
    return (
      <div className={s.Projects}>
        <div className={s.ProjectsTableMain}>
          <h1>Активность</h1>
          <Activities data={this.state.com} />
          <img
            className={s.ViewMore}
            src={ViewMore}
            style={this.state.styleForImg}
            alt="#"
            onClick={this.handleButtonClick}
          />
        </div>
        <ProjectsText data={this.state.rep} />
      </div>
    );
  }
}

export default Projects;
