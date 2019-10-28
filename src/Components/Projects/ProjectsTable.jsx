import React from 'react';

import s from './Projects.module.css'

class ProjectsTable extends React.Component {
    constructor() {
        super();
        this.state = {}

    }

    componentDidMount() {
        var i = 0;

        fetch('/API/Commits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => { return response.json() })
            .then(data => {
                // мапим данные нужным нам способом
                const body = data.map(repo => {
                    if (i < this.props.times) {
                        i++;
                        return (
                            <div key={repo.Date}>
                            <hr/>
                        <div className={s.Reposit}>
                
                          <div className={s.Project}><a href={repo.UrlProj}>{repo.Project}</a></div>
                          <div className={s.Message}><a href={repo.UrlCommit}>{repo.Message}</a></div>
                          <div className={s.Date}>{repo.Date.substring(0,10)}</div>
                          <div className={s.Time}>{repo.Date.substring(11).slice(0,-5)}</div>
                
                      </div>
                    </div>
                        )
                    }else{
                      return false;
                    }
                });
                // присваиваем новое значение переменной `body`
                this.setState({ body });

            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className={s.ProjectsTable}>
            <div className={s.RepAll}> 
      <div className={s.Top}>
          <div className={s.Project}>Project</div>
          <div className={s.Message}>Message</div>
          <div className={s.Date}>Date</div>
          <div className={s.Time}>Time</div>
      </div>
      {this.state.body}
      </div>
        </div>
        )
    }
}

export default ProjectsTable;