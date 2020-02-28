import { postReducer, logInReducer } from './reducers.js'
import registrationReducer from './registration/reducers'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import actions from './actions'

let store

const allReducers = combineReducers({
  posts: postReducer,
  userInfo: logInReducer,
  registration: registrationReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

if (typeof Storage !== 'undefined') {
  let deserializedState = JSON.parse(sessionStorage.getItem('appState'))
  if (deserializedState !== null) {
    store = createStore(
      allReducers,
      deserializedState,
      composeEnhancers(applyMiddleware(thunkMiddleware))
    )
  } else
    store = createStore(
      allReducers,
      composeEnhancers(applyMiddleware(thunkMiddleware))
    )
} else {
  store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
}

// store.dispatch(actions.postActions.async.requestPostsAsync('today'))
export default store
