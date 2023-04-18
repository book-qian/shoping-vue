/*
 * @Author: yangyongqian
 * @Date: 2023-04-13 09:44:55
 * @Description:购物车请求模块
 */
import api from '@/utils/server'
import {
  GoodDetail,
  JoinCat,
  JoinCatResult,
  CartListResult,
  ModfiyCartParams,
  ModfiyCartResult,
  DeleteCartParams,
  DeleteCartResult
} from '@/types/api'
// 商品详情
export function goodDetail(id: number): Promise<GoodDetail> {
  return api({
    url: '/good/getGood?id=' + id,
    method: 'get'
  })
}

// 加入购物车
export function joinCat(params: JoinCat): Promise<JoinCatResult> {
  return api({
    url: '/cart/add',
    method: 'post',
    data: params
  })
}

export function cartList(): Promise<CartListResult> {
  return api({
    url: '/cart/getCart',
    method: 'post'
  })
}
export function modifyCart(
  params: ModfiyCartParams
): Promise<ModfiyCartResult> {
  return api({
    url: '/cart/modify',
    method: 'post',
    data: params
  })
}

export function deleteCart(
  params: DeleteCartParams
): Promise<DeleteCartResult> {
  return api({
    url: '/cart/delete',
    method: 'post',
    data: params
  })
}
