import { connect } from 'react-redux';
import _ from 'lodash';
import FullPostView from '../components/FullPostView';



const mapStateToProps = (state, ownProps) => {
  // This is messy, and I fully expect it to change.
  const postFamily = _.filter(state.posts, el => _.find(el, function(o){return o.id === ownProps.match.params.postID}) !== undefined);
  return {
    postInfo: _.find(postFamily[0], el => el.id === ownProps.match.params.postID),
  };
}

const FullPostContainer = connect(
  mapStateToProps,
)(FullPostView);

export default FullPostContainer;
