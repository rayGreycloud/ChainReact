import moment from 'moment';

export const getGroupData = group => {
  const yesterday = moment().subtract(1, 'days');

  const postGroup = {
    ...group,
  };

  // determine group title
  if (group.groupDate.isBefore(yesterday, 'day')) {
    postGroup.groupTitle = group.groupDate.format('dddd');
  } else if (group.groupDate.isAfter(yesterday, 'day')) {
    postGroup.groupTitle = 'Today';
  } else {
    postGroup.groupTitle = 'Yesterday';
  }

  // determine short list
  postGroup.shortlist = group.groupDate.isSameOrBefore(yesterday, 'day');

  // calculate group count
  postGroup.groupCount = group.groupPosts.length;

  // calculate group tip total
  const tipReducer = (acc, post) => {
    return acc + post.postTipTotal;
  };

  postGroup.groupTipTotal = Number(
    group.groupPosts.reduce(tipReducer, 0).toFixed(3)
  );
  //  return group
  return postGroup;
};
