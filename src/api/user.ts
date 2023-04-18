/*
 * @Author: yangyongqian
 * @Date: 2023-04-07 14:43:15
 * @Description:封装接口请求方法
 */
import api from '@/utils/http'
import { LoginParams, LoginResult } from '@/types/api'

// 登录
export function login(params: LoginParams): Promise<LoginResult> {
  return api({
    url: '/user/login',
    method: 'post',
    data: params
  })
}

// 注册
export function register(params: LoginParams): Promise<LoginResult> {
  return api({
    url: '/user/reg',
    method: 'post',
    data: params
  })
}
