import { connect } from 'react-redux'
import DashboardComponent from './DashboardComponent'

const mapStateToProps = state => {
  return {
    postGroups: state.posts.postGroups
  }
}

const DashboardContainer = connect(mapStateToProps)(DashboardComponent)

export default DashboardContainer
