// 调用后台接口
import fecth from './fecth'
import url from './url'
//后台接口调用
export function test(data) {
 return fecth.post(url.testUrl,data);
}
