import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider>
        <App store={store}/>
    </Provider>
    , document.getElementById('rood')
)


serviceWorker.unregister();
