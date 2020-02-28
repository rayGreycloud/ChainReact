import faker from 'faker';
import moment from 'moment';

import { getGroupData } from './group-data';

export const getPosts = (qty = 20) => {
  const groupPosts = [];

  for (let i = 0; i < qty; i++) {
    const post = {
      id: faker.random.uuid(),
      postImage: 'https://react.semantic-ui.com/images/wireframe/image.png',
      author: faker.name.firstName(),
      description: faker.lorem.sentence(),
      upvoteCount: faker.random.number(99),
      commentCount: faker.random.number(25),
      postTipTotal: Number((faker.random.number(10000) / 100).toFixed(3)),
      comments: [],
    };

    groupPosts.push(post);
  }

  return groupPosts;
};

export const getPostGroups = (qty = 3) => {
  let postGroups = [];

  // create groups
  for (let i = 0; i < qty; i++) {
    const group = {
      groupDate: moment().subtract(i, 'days'),
      groupPosts: getPosts(),
    };

    postGroups.push(group);
  }

  return postGroups;
};

// export const getComments = (quantity = 2) => {}

export const fetchPostGroups = () => {
  const data = { postGroups: [] };
  const groups = getPostGroups();

  groups.map(group => {
    const newGroup = getGroupData(group);
    data.postGroups.push(newGroup);
  });

  return data;
};

export const getDummyPostData = (quantity = 20) => {
  const yesterday = moment().subtract(1, 'days');

  let postGroups = [];
  for (let i = 0; i <= 2; i++) {
    const group = {
      groupDate: moment().subtract(i, 'days'),
      groupTitle: '',
      groupCount: 0,
      groupTipTotal: 0,
      groupPosts: [],
      shortlist: false,
    };

    for (let j = 0; j <= quantity; j++) {
      const post = {
        id: faker.random.uuid(),
        postImage: 'https://react.semantic-ui.com/images/wireframe/image.png',
        author: faker.name.firstName(),
        description: faker.lorem.sentence(),
        upvoteCount: faker.random.number(99),
        commentCount: faker.random.number(25),
        postTipTotal: Number((faker.random.number(10000) / 100).toFixed(3)),
        comments: [],
      };

      group.groupPosts.push(post);
    }

    // determine group title
    if (group.groupDate.isBefore(yesterday, 'day')) {
      group.groupTitle = group.groupDate.format('dddd');
    } else if (group.groupDate.isAfter(yesterday, 'day')) {
      group.groupTitle = 'Today';
    } else {
      group.groupTitle = 'Yesterday';
    }

    // determine short list
    group.shortlist = group.groupDate.isSameOrBefore(yesterday, 'day');

    // calculate group count
    group.groupCount = group.groupPosts.length;

    // calculate group tip total
    const tipReducer = (acc, post) => {
      return acc + post.postTipTotal;
    };
    group.groupTipTotal = Number(
      group.groupPosts.reduce(tipReducer, 0).toFixed(3)
    );

    postGroups.push(group);
  }
  console.log('post groups:', postGroups);
  const data = { postGroups };

  return data;
};
