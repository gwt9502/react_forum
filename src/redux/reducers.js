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
  showScrollLoading: false,  // 显示加载图标
  isToEnd: false, // 是否到底
};

//拆分Reducer

//当前显示的数据
function showDataLists(showDataLists = initialState.showDataLists, action) {
	switch (action.type) {
		case ActionTypes.SAVESHOWDATA:
			return action.data;
    case ActionTypes.PUSHSHOWDATA:
      return [...showDataLists, ...action.val]
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

function showScrollLoading(showScrollLoading = initialState.showScrollLoading, action) {
  switch (action.type) {
    case ActionTypes.CHANGESCROLLLOADING:
      return action.bool;
    default:
      return showScrollLoading;
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

function isToEnd(isToEnd = initialState.isToEnd, action) {
  switch (action.type) {
    case ActionTypes.ISTOEND:
      return action.val
    default:
      return isToEnd
  }
}


//合并Reducer
const reducer = combineReducers({
  showDataLists,
  currentNewDetails,
  loading,
  showScrollLoading,
  showCommon,
  currentTab,
  isToEnd,
});

export default reducer
