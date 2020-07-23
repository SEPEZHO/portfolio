import React from 'react';
import ReactDOM from 'react-dom';
import './Style/Index.sass';
import App from './App';
import * as serviceWorker from './ServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
