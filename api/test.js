// 调用后台接口
import fecth from './fecth'
import url from './url'
//后台接口调用
export function Demo(data) {
  fecth.post(url.testUrl,data);
}
