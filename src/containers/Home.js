import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Home from '../components/home/Home'

const mapStateToProps = (state) => ({
  showDataLists: state.showDataLists,
  currentTab: state.currentTab
})

const mapDispatchToProps = (dispatch) => ({
  saveShowData: (data) => {
    dispatch(actions.saveShowData(data))
  },
  changeLoading: (bool) => {
    dispatch(actions.changeLoading(bool))
  },
  changeShowCommon: (bool) => {
    dispatch(actions.changeShowCommon(bool))
  },
  changeTab: (val) => {
    dispatch(actions.changeTab(val))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
