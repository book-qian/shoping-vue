/*
 * @Author: yangyongqian
 * @Date: 2023-04-10 15:26:32
 * @Description:商品列表请求方法封装
 */
import api from '@/utils/http'
import { listResult } from '@/types/api'
// 列表
export function list(): Promise<listResult> {
  return api({
    url: '/data/list.json',
    method: 'get'
  })
}
