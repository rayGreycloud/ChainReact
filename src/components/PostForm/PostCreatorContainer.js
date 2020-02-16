import { connect } from 'react-redux'
// import _ from 'lodash';
import PostCreatorView from './PostCreatorView'

const mapStateToProps = (state, ownProps) => {
  return {
    ownerID: state.userInfo.ID
  }
  // This is messy, and I fully expect it to change.
  // const postFamily = _.filter(state.posts, el => _.find(el, function(o){return o.id === ownProps.match.params.postID}) !== undefined);
  // return {
  //   postInfo: _.find(postFamily[0], el => el.id === ownProps.match.params.postID),
  // };
}

const PostCreatorContainer = connect(mapStateToProps)(PostCreatorView)

export default PostCreatorContainer
