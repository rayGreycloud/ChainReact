import { connect } from 'react-redux';
import DashboardView from '../components/DashboardView';



const mapStateToProps = (state) => {
    return {
        postGroups: state.posts,
    };
}

const DashboardContainer = connect(
  mapStateToProps,
)(DashboardView);

export default DashboardContainer;
