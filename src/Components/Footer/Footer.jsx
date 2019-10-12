import React from 'react';

import s from './Footer.module.css';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    Like = () => {
        fetch('/likes', {
            method: 'POST'
        })
        let Likes = this.state.Likes;
        Likes++
        this.setState({
            background: '#ff6b61',
            Likes: Likes
        })
    }

    componentDidMount() {
        fetch('/likes/num', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ Likes: data })
            })
    }

    render() {
        return (
            <div>
              <div className={s.Footer}>
                    <div className={s.Menu}>
                      <div className={s.Main}><a href='/'>Main</a></div>
                      <div className={s.Contact}><a href='/Contact'>Contact</a></div>
                    </div>
                    <div className={s.LikeBtn} style={{background: this.state.background}}onClick={this.Like}><span>{this.state.Likes}</span></div>
                  </div>
            </div>
        )
    }
}

export default Footer;