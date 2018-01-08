import { connect } from 'react-redux'
import App from '../App'
import * as actions from '../redux/actions'

const mapStateToProps = (state) => ({
  loading: state.loading,
  showCommon: state.showCommon
})

const mapDispatchToProps = (dispatch) => ({
  changeLoading: (bool) => {
    dispatch(actions.changeLoading(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
