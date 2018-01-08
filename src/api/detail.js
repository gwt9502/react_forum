import fetch from './axios'

export function getNewsDetail (type, url, options) {
  return fetch(type, url, options)
}