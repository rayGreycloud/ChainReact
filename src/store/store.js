import reducers from './reducers.js';
import { createStore } from 'redux';

let store;

if (typeof(Storage) !== 'undefined') {
    let deserializedState = JSON.parse(sessionStorage.getItem('appState'));
    if (deserializedState !== null) {
        store = createStore(reducers, deserializedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;
    } else store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
    store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default store;