import React from "react";
import MainProjects from "./MainProjects.jsx";
import ProjectsTable from "../../Projects/Activities.jsx";
import MainAbout from "./About.jsx";
import ViewMore from "../../../Static/Images/Icons/ViewMore.png";

import s from "./Main.module.sass";

class Main extends React.Component {
  render() {
    return (
      <div className={s.Main}>
        <MainAbout />
        <MainProjects />

        <div className={s.Table}>
          <h1>Последняя активность</h1>
          <div className={s.ProjectsTableMain}>
            <ProjectsTable times="5" />
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
