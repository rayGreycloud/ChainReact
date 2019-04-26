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
    userInfo: {
        name: '',
        // TODO: Add some more useful fields
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

const logInReducer = function(state = baseState.userInfo, action) {
    return state;
}

const reducers = combineReducers({
    posts: postReducer,
    login: logInReducer,
});

export default reducers;