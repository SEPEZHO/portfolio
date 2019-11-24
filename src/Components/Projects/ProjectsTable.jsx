import React from 'react';

import s from './Projects.module.sass'

class ProjectsTable extends React.Component {
    constructor() {
        super();
        this.state = {
          body: <p style={{'padding': '20px'}}>Loading...</p>
        }
    }

    componentDidMount() {
      this.fun()
    }
    componentWillReceiveProps() {
      this.fun();
    }

    fun = () => {
        let i = 0;
        fetch('https://sepezho.ru:7777/API/Commits', {
                method: 'POST',
            })
            .then(response => { return response.json() })
            .then(data => {
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
                    } else {
                        return false;
                    }
                });
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
                  <div className={s.Project}>Репозиторий</div>
                  <div className={s.Message}>Сообщение</div>
                  <div className={s.Date}>Дата</div>
                  <div className={s.Time}>Время</div>
                </div>
                {this.state.body}
              </div>
            </div>
        )
    }
}

export default ProjectsTable;