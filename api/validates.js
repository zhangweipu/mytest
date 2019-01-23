import fetch from './fecth'
import url from './url'

export function loadvalidate(keyword) {
  return fetch.post(url.loginUrl, keyword)
}
