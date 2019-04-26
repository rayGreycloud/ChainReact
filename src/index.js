import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import store from './store/store.js'
import Root from './components/Root';

// Seed or hydrate redux state. 
if (typeof(Storage) !== 'undefined') {
    store.subscribe(() => {
        localStorage.setItem('appState', JSON.stringify(store.getState()));
    });
}


ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
