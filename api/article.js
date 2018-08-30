import fecth from './fecth'
import url from './url'

export function addArticle(data) {
  return fecth.post(url.addArticle,data)
}
