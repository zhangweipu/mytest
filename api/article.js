import fecth from './fecth'
import url from './url'

export function addArticle(data) {
  return fecth.post(url.addArticle,data)
}
export function getSentence(data) {
  return fecth.get(url.getSentence+data)
}
