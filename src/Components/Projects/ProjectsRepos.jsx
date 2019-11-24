import React from 'react';

import s from './Projects.module.sass';

class ProjectsRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: <p style={{'padding': '40px'}}>Loading...</p>
        };
    }

    componentDidMount() {
        fetch('https://sepezho.ru:7777/API/Repositories', {
                method: 'POST',
            })
            .then(response => { return response.json() })
            .then(data => {
                const body = data.map(repo => {
                    return (
                      <div key={repo.Name}>
                        <hr/>
                        <div className={s.RepositProjects}>
              
                          <div className={`${s.Name} ${s.Block}`}><a href={repo.Url}>{repo.Name}</a></div>
                          <div className={`${s.Descrip} ${s.Block}`}>{repo.Description}</div>
                          <div className={`${s.Language} ${s.Block}`}>{repo.Language}</div>
                          <div className={`${s.Create} ${s.Block}`}>{repo.CreateAt.substring(0,10)}</div>
                          <div className={`${s.Update} ${s.Block}`}>{repo.LastUpdate.substring(0,10)}</div>
                          <div className={`${s.Size} ${s.Block}`}>{repo.Size}</div>
                
                        </div>
                      </div>
                    )
                });
                this.setState({ body });
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    render() {
        return (
          <div className={s.ProjectsRepos}> 
            <div className={s.TopProjects}>
              <div className={`${s.Name} ${s.Block}`}>Репозиторий</div>
              <div className={`${s.Descrip} ${s.Block}`}>Описание</div>
              <div className={`${s.Language} ${s.Block}`}>Язык</div>
              <div className={`${s.Create} ${s.Block}`}>Создан</div>
              <div className={`${s.Update} ${s.Block}`}>Последнее обновление</div>
              <div className={`${s.Size} ${s.Block}`}>Размер (Кб)</div>
            </div>
            {this.state.body}
          </div>
        )
    }
}

export default ProjectsRepos;