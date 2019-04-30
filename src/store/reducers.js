import { combineReducers } from "redux";
// Represents the base app's state. 
// PostGroups may grow or shrink, based on a user's request (foreseeably).
const baseState = {
    // Represents the viewable "slices" of app's dashboard.
    // Each postGroup represents the state of a separate postGroup component (defined in src/components/PostGroup.js).
    postGroups: {
        today: [],
        yesterday: [],
    },
    // Object representing the logged-in user.
    loggedInUser: {
       username: '',
    },
};


const postReducer = function(state = baseState.postGroups, action) {
    if (action.type === 'ADD_POST') {
        let newState = {...state};
        newState[action.payload.containerName].push(action.payload);
        return newState;
    }
    return state;
}

const logInReducer = function(state = baseState.loggedInUser, action) {
    if (action.type === 'LOG_IN') {
        let newState = {...state};
        debugger;
        newState.username = action.payload.username;
        return newState;
    }
    return state;
}

const reducers = combineReducers({
    posts: postReducer,
    userInfo: logInReducer,
});

export default reducers;