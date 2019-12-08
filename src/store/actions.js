import API from '../util/API'

/**
 * Each action in this object is designed to follow the Flux Standard Action (FSA)
 * format, found here: https://github.com/redux-utilities/flux-standard-action
 * It is preferred that each action return an object based on some object argument.
 * SOME IMPORTANT NOTES:
 * - The ID of a post should be an RFC4122-compliant UUID (v4).
 * - Upon attempting to post new content for a user, we should look them up in the DB
 *      and ensure that the user hasn't posted for at least 24 hours.
 *
 */

//TODO: Alter the functionality of this action list to retrieve data from the API instead of
// creating its own toy records in the local storage.
// https://daveceddia.com/where-fetch-data-redux/

const actions = {
  postActions: {
    requestPosts: function(cat) {
      return {
        type: 'REQUEST_POSTS',
        payload: {
          category: cat
        }
      }
    },

    receivePosts: function(cat, res) {
      return {
        type: 'RECEIVE_POSTS',
        payload: {
          category: cat,
          posts: res
        }
      }
    },

    async: {
      // thunkified function for async operation of retrieving non-toy data from API
      requestPostsAsync: function(category) {
        return function(dispatch) {
          dispatch(actions.postActions.requestPosts(category))

          return API.get('/posts/content')
            .then(
              res => res.data,
              err => {
                console.error('Content retrieval failed:')
                console.error(err)
              }
            )
            .then(res =>
              dispatch(actions.postActions.receivePosts(category, res))
            )
        }
      }
    }
  },
  userActions: {
    logIn: function(ob) {
      return {
        type: 'LOG_IN',
        payload: {
          token: ob.token,
          username: ob.username
        }
      }
    }
  }
}

/**
 * example post: {
        author: 'Rulon',
        img: faker.image.avatar(),
        rating: {positive: 5, negative: 2},
        details: {
            timestamp: {new Date()},
            action: {
                subject: 'Pirates of the Caribbean',
                predicate: 'watching',
            },
            status: 'Johnny Depp sure is a good drunk pirate.',
            location: 'Midwest, USA'
        }
    }
 */
export default actions
