import { connect } from 'react-redux';
import PostGroup from '../components/PostGroup';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    posts: state.posts.postGroups[ownProps.title],
  };
}


const PostGroupContainer = connect(
  mapStateToProps,
)(PostGroup);

export default PostGroupContainer;
