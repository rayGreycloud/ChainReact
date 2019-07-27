import reducers from './reducers.js';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import actions from './actions';

let store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (typeof(Storage) !== 'undefined') {
    let deserializedState = JSON.parse(sessionStorage.getItem('appState'));
    if (deserializedState !== null) {
        store = createStore(
            reducers, 
            deserializedState,
            composeEnhancers(
                applyMiddleware(
                    thunkMiddleware,
                ))
            );
    } else store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
            ))
        );
} else {
    store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
            ))
        );
}

store.dispatch(actions.postActions.async.requestPostsAsync('today'))
export default store;