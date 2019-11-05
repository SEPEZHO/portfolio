import React from 'react';

import s from './Footer.module.sass';

const DownMenu = () => {
    return (
        <div className={s.Menu}>
                      <a href='/'><div className={s.Main}><span>Main</span></div></a>
                      <a href='/Contact'><div className={s.Contact}><span>Contact</span></div></a>
        </div>
    )
}

export default DownMenu;