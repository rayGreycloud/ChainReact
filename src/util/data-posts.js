import faker from 'faker'

export const getDummyPostData = (quantity = 20) => {
  let data = {
    groupPosts: []
  }

  for (let i = 0; i <= quantity; i++) {
    const post = {
      id: faker.random.uuid(),
      postImage: 'https://react.semantic-ui.com/images/wireframe/image.png',
      author: faker.name.firstName(),
      description: faker.lorem.sentence(),
      upvoteCount: faker.random.number(99),
      commentCount: faker.random.number(25),
      postTipTotal: faker.random.number(10000) / 100,
      comments: []
    }

    data.groupPosts.push(post)
  }

  return data
}
