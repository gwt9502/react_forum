import fetch from './axios'

export function getShowDataLists (type, url, options) {
  return fetch(type, url, options)
}