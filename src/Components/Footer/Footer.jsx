import React from 'react';

import s from './Footer.module.css';

class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            Likes: 0
        };
    }

    Like = () => {
        fetch('/Likes', {
            method: 'POST'
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
                    <div className={s.LikeBtn} onClick={this.Like}><span>LikeBtn</span></div>
                  </div>
            </div>
        )
    }
}

export default Footer;