//编写请求以及拦截器
//发送http请求
import axios from 'axios'
import store from '../src/store/index'

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
    return request;
  },error => {
    console.info("error")
    return request
  })

//reaponse 拦截器
service
  .interceptors
  .response
  .use(request => {
    console.info("interceptor response")
    return request;
  },error => {
    console.info("response error")
  })
export default service
