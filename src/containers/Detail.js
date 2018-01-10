import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Detail from '../components/detail/Detail'
import fetch from '../api/axios'

const mapStateToProps = (state) => ({
  currentNewsDetails: state.currentNewDetails
})

const mapDispatchToProps = (dispatch) => ({
  saveCurrentNewsDetails: async (options) => {
    dispatch(actions.saveNewsDetails(await fetch('get', `topic/${options}`)))
  },
  changeLoading: (bool) => {
    dispatch(actions.changeLoading(bool))
  },
  changeShowCommon: (bool) => {
    dispatch(actions.changeShowCommon(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
