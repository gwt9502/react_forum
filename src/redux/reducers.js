import { combineReducers } from 'redux'
import * as ActionTypes from "./actionTypes"

/**
 * reducer就是一个纯函数，接收旧的state和action，返回新的state
 */

 //需要存储的初始状态数据
const initialState = {
  showDataLists: [], // 首页展示的数据
  currentNewDetails: {}, // 当前新闻详情页
  loading: true, // 加载
  showCommon: true, // 显示头和底
  currentTab: 'all', // 当前分类
};

//拆分Reducer

//当前显示的数据
function showDataLists(showDataLists = initialState.showDataLists, action) {
	switch (action.type) {
		case ActionTypes.SAVESHOWDATA:
			return action.data;
		default:
			return showDataLists;
	}
}

function currentNewDetails(currentNewDetails = initialState.currentNewDetails, action) {
  switch (action.type) {
    case ActionTypes.SAVENEWSDETAILS:
      return action.data
    default:
      return currentNewDetails
  }
}

function loading(loading = initialState.loading, action) {
  switch (action.type) {
    case ActionTypes.CHANGELOADING:
      return action.bool;
    default:
      return loading;
  }
}

function showCommon(showCommon = initialState.showCommon, action) {
  switch (action.type) {
    case ActionTypes.CHANGESHOWCOMMON:
      return action.bool;
    default:
      return showCommon
  }
}

function currentTab(currentTab = initialState.currentTab, action) {
  switch (action.type) {
    case ActionTypes.CHANGETAB:
      return action.val;
    default:
      return currentTab
  }
}


//合并Reducer
const reducer = combineReducers({
  showDataLists,
  currentNewDetails,
  loading,
  showCommon,
  currentTab,
});

export default reducer