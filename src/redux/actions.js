import * as ActionTypes from './actionTypes'

export function saveShowData (data) {
  return { type: ActionTypes.SAVESHOWDATA, data }
}

export function saveNewsDetails (data) {
  return { type: ActionTypes.SAVENEWSDETAILS, data }
}

export function changeLoading (bool) {
  return { type: ActionTypes.CHANGELOADING, bool }
}

export function changeShowCommon (bool) {
  return { type: ActionTypes.CHANGESHOWCOMMON, bool }
}

export function changeTab (val) {
  return { type: ActionTypes.CHANGETAB, val }
}