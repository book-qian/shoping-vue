/*
 * @Author: yangyongqian
 * @Date: 2023-03-29 20:47:37
 * @Description:axios 拦截器
 */
import axios from 'axios'
import { USER_URL } from '@/config/app.confing'
import { ResponseErr } from '@/types/http'

const instance = axios.create({})

instance.defaults.baseURL = USER_URL // 基础路径
instance.defaults.responseType = 'json' // 返回数据类型json
instance.defaults.timeout = 20000 // 超时时间

instance.interceptors.request.use(
  async (config) => {
    console.log('config=', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err: ResponseErr) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权，请登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '服务未实现'
          break
        case 502:
          err.message = '网关错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'HTTP版本不受支持'
          break
        default:
          err.message = '服务出错'
          break
      }
    }
    return Promise.reject(err)
  }
)

export default instance
