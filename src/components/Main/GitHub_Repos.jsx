import React from 'react';

import s from './Main.module.css';

const username = 'Sepezho';

class GitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: <p>Loading...</p>
    };
  }

  componentDidMount() {
    // выполняем запрос на получение данных
    fetch(`http://api.github.com/users/${username}/repos`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      // мапим данные нужным нам способом
      const body = data.map(repo => {
        return <li key={repo.id}>
        	Name: <a href={repo.html_url}>{repo.name}</a> 
        	/ language: {repo.language} 
        	/ Create: {repo.created_at.substring(0,10)} 
        	/ Last update: {repo.updated_at.substring(0,10)} 
        	/ Size (Kb): {repo.size} 
        </li>;
      });
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
    <div className={s.Reposit}>
      <h3>List of repositories:</h3>
      <ul>
        {this.state.body}
      </ul>
    </div>
  )}
}

export default GitHub;
