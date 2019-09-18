import React from 'react';

import s from './Table.module.css';

class GitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: <p>Loading...</p>
    };
  }

  componentDidMount() {
    // выполняем запрос на получение данных
  fetch('/req', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            name: "John",
            email: "john@example.com"
        }
      })
    })
    .then(response => {return response.json()})
    .then(data => {
      console.log(data);

      // мапим данные нужным нам способом
      const body = data.map(repo => {
        return( 
          <div>
              <div className={s.Reposit}>
                {/*
        	       <div className={`${s.name} ${s.block}`}><a href={repo.html_url}>{repo.name}</a></div>
                 <div className={`${s.descrip} ${s.block}`}>{repo.description}</div>
        	       <div className={`${s.language} ${s.block}`}>{repo.language}</div>
        	       <div className={`${s.create} ${s.block}`}>{repo.created_at.substring(0,10)}</div>
        	       <div className={`${s.update} ${s.block}`}>{repo.updated_at.substring(0,10)}</div>
        	       <div className={`${s.size} ${s.block}`}>{repo.size}</div> */}
                }
              </div>
              <hr/>
          </div>
        )});
      console.log(data)
      // присваиваем новое значение переменной `body`
      this.setState({ body });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
     <div className={s.RepAll}> 
      <div className={s.Top}>
          <div className={`${s.name} ${s.block}`}>Name</div>
          <div className={`${s.descrip} ${s.block}`}>Description</div>
          <div className={`${s.language} ${s.block}`}>Language</div>
          <div className={`${s.create} ${s.block}`}>Create</div>
          <div className={`${s.update} ${s.block}`}>Last update</div>
          <div className={`${s.size} ${s.block}`}>Size (Kb)</div>
      </div>
      {this.state.body}
      </div>
  )}
}

export default GitHub;
