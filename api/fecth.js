//编写请求以及拦截器
//发送http请求
import axios from 'axios'
import store from '../src/store/index'
import response from "vue-resource/src/http/response";

const config = require('../config/index')

//创建axios实例
const options = {
  //baseURI:
  timeout: 300000
}
const service = axios.create(options)
//request 拦截器
service
  .interceptors
  .request
  .use(request => {
    console.info("interceptor request")
    var url = request.url;
    var author = localStorage.getItem("user");
    console.info("用户", author)
    if (author != null && author != '') {
      request.headers["user"] = author
    }
    // else if (url.match('/admin/*')) {
    //   this.$router.push({path: "/login"})
    // }


    return request;
  }, error => {
    console.info("error")
    return request
  })

//reaponse 拦截器
service
  .interceptors
  .response
  .use(request => {
    console.info("interceptor response")
    console.info(response)
    return request;
  }, error => {
    console.info("response error")
  })
export default service
