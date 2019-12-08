import { connect } from 'react-redux'
import DashboardView from '../components/dashboard/DashboardView'

const mapStateToProps = state => {
  return {
    postGroups: state.posts.postGroups
  }
}

const DashboardContainer = connect(mapStateToProps)(DashboardView)

export default DashboardContainer
