import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Home from '../components/home/Home'
import fetch from '../api/axios'

const mapStateToProps = (state) => ({
  showDataLists: state.showDataLists,
  currentTab: state.currentTab,
  showScrollLoading: state.showScrollLoading,
  isToEnd: state.isToEnd
})

const mapDispatchToProps = (dispatch) => ({
  saveShowData: async (options) => {
    await dispatch(actions.changeLoading(true))
    await dispatch(actions.saveShowData(await fetch('get', 'topics?', options)))
    await dispatch(actions.changeLoading(false))
  },
  pushShowData: async (options) => {
    await dispatch(actions.changeScrollLoading(true))
    await dispatch(actions.pushShowData(await fetch('get', 'topics?', options)))
    await dispatch(actions.changeScrollLoading(false))
  },
  changeShowCommon: (bool) => {
    dispatch(actions.changeShowCommon(bool))
  },
  changeTab: (val) => {
    dispatch(actions.changeTab(val))
    dispatch(actions.changeIsToEnd(false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
