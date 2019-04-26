import uuidv4 from 'uuid/v4';

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
const actions = {
    addPost: function(obj) {
        return {
            type: 'ADD_POST',
            payload: {
                id: uuidv4(),
                author: obj.author,
                img: obj.img,
                rating: obj.rating,
                details: obj.details,
                status: obj.status,
                location: obj.location,
                containerName: obj.containerName,
            }
        }
    }    
};

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
export default actions;
 