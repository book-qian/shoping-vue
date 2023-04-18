/*
 * @Author: yangyongqian
 * @Date: 2023-04-07 14:54:55
 * @Description:api参数类型定义
 */
export interface LoginParams {
  name: string
  pwd: string
}

type Data = {
  u_nam: string
  u_id: string
  u_pwd: string
  u_sex: string
  u_nick: string
  u_age: string
  u_status: string
}

export interface LoginResult {
  code: number
  msg: string
  token: string
  data: Data
}

export interface listResult {
  name: string
  price: number
  img: string
  id: number
}

export type GoodDetail = {
  id?: number
  name?: string
  price?: number
  img?: string
}

export interface JoinCat {
  p_id?: number
  p_name?: string
  p_img?: string
  p_num?: number
  p_price?: number
}
export interface JoinCatResult {
  code: number
  msg: string
  data: JoinCat
}

export interface CartList extends JoinCat {
  p_total?: number
  c_id?: string
}

export interface CartListResult {
  code: number
  msg: string
  data: Array<CartList>
}

export interface ModfiyCartParams {
  c_id?: string
  p_num?: number
}
export interface ModfiyCartResult {
  code: number
  msg: string
}

export interface DeleteCartParams {
  c_id?: string
}
export interface DeleteCartResult extends ModfiyCartResult {}
