import { combineReducers } from "redux";
// Represents the base app's state. 
// PostGroups may grow or shrink, based on a user's request (foreseeably).
const baseState = {
    // Represents the viewable "slices" of app's dashboard.
    // Each postGroup represents the state of a separate postGroup component (defined in src/components/PostGroup.js).
    postGroups: {
        today: [],
        older: [],
    },
    loading: false,
    // Object representing the logged-in user.
    loggedInUser: {
       username: '',
       id: '',
    },
};


const postReducer = function(state = baseState, action) {
    let newState = {...state};
    switch(action.type) {
        case 'REQUEST_POSTS': 
            newState.loading = true;
            return newState;

        case 'RECEIVE_POSTS': 
            newState.postGroups[action.payload.category] = action.payload.posts;
            newState.loading = false;
            console.log(newState);
            return newState;

        default: 
            return state;
    }


}

const logInReducer = function(state = baseState.loggedInUser, action) {
    if (action.type === 'LOG_IN') {
        let newState = {...state};
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