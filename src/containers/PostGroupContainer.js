import { connect } from 'react-redux';
import PostGroup from '../components/PostGroup';


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts[ownProps.title],
  };
}


const PostGroupContainer = connect(
  mapStateToProps,
)(PostGroup);

export default PostGroupContainer;
