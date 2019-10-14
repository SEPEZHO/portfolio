import React from 'react';

import s from './Footer.module.css';

const DownMenu = () => {
    return (
        <div className={s.Menu}>
                      <div className={s.Main}><a href='/'>Main</a></div>
                      <div className={s.Contact}><a href='/Contact'>Contact</a></div>
                    </div>
    )
}

export default DownMenu;