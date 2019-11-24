import React from 'react';

import s from './Footer.module.sass';

const Text = () => {
        return (
            <div className={s.Text}>
            	<h1>Создано sepezho</h1>
            	<div>
            		Время создания: 
            		<nav>
            			<li>С: 1.09.2019</li>
            			<li>До: __.__.____</li>
            		</nav>
            	</div>
            </div>
        )
}

export default Text;