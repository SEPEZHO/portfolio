import React from 'react';

import s from './Footer.module.sass';

const Text = () => {
        return (
            <div className={s.Text}>
            	<h1>Created by sepezho</h1>
            	<div>
            		Time to create: 
            		<nav>
            			<li>from: 1.09.2019</li>
            			<li>to: __.__.____</li>
            		</nav>
            	</div>
            </div>
        )
}

export default Text;