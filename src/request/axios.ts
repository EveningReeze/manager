/*
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 15:43:22
 * @LastEditors: @wangzisheng @Z17690728020@163.com
 * @LastEditTime: 2022-08-28 17:06:54
 * @FilePath: \manager\src\request\axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
// 创建 axios实例
const service = axios.create({
  baseURL: '', // 所有请求的公共地址部分
  timeout: 3000, // 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 请求相关处理 请求拦截 在请求拦截中可以补充请求相关的配置
// interceptors axios的拦截器对象
service.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token') || ''
  }
  // config 请求的所有信息
  // console.log(config);
  return config // 将配置完成的config对象返回出去 如果不返回 请求讲不会进行
}// , err => {
//   // 请求发生错误时的相关处理 抛出错误
//   Promise.reject(err)
// }
)
service.interceptors.response.use(res => {
  const code:number = res.data.code
  if (code !== 200) {
    return Promise.reject(res.data)
  }
  // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
  // res 是所有相应的信息
  console.log(res)
  return res.data
}, err => {
  // 服务器响应发生错误时的处理
  Promise.reject(err)
})
export default service
