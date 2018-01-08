import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Detail from '../components/detail/Detail'

const mapStateToProps = (state) => ({
  currentNewsDetails: state.currentNewDetails
})

const mapDispatchToProps = (dispatch) => ({
  saveCurrentNewsDetails: (data) => {
    dispatch(actions.saveNewsDetails(data))
  },
  changeLoading: (bool) => {
    dispatch(actions.changeLoading(bool))
  },
  changeShowCommon: (bool) => {
    dispatch(actions.changeShowCommon(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
