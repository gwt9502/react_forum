import * as ActionTypes from './actionTypes'

export function saveShowData (data) {
  return { type: ActionTypes.SAVESHOWDATA, data }
}

export function pushShowData (data) {
  let type = data.length > 0 ? 'PUSHSHOWDATA' : 'ISTOEND'
  let val = data.length > 0 ? data : true
  return {type: ActionTypes[type], val}
}

export function changeScrollLoading (bool) {
  return {type: ActionTypes.CHANGESCROLLLOADING, bool}
}

export function changeIsToEnd (val) {
  return {type: ActionTypes.ISTOEND, val}
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
