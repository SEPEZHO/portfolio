import React from 'react';

import s from './CommentSystem.module.sass';

class Catch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
       }
       componentDidMount(){
        fetch('https://sepezho.ru:7777/API/Chat/Res', {
                method: 'POST',
            })
            .then(response => { return response.json() })
            .then(data => {
                data.reverse();
                 const body = data.map(repo => {
                    return (
                      <div key={repo.Name}>
                      <hr/>
                        <div className={s.Message}>

                          <hr />
                          <div className={`${s.Name} ${s.Block}`}><span>{repo.Name}</span></div>
                          <div className={`${s.Date} ${s.Block}`}>{repo.Date.substring(11).slice(0, -5)}/{repo.Date.substring(0, 10)}</div>
                          <div className={`${s.MessageText} ${s.Block}`}>{repo.Message}</div>

                      </div>
                    </div>
                    )
                });
                // присваиваем новое значение переменной `body`
                this.setState({ body });
            })
       }
        render() {
            return (
                <div className={s.Catch}>
                    {this.state.body}
                </div>
            )
    }
}

export default Catch;