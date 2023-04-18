/*
 * @Author: yangyongqian
 * @Date: 2023-04-08 18:15:14
 * @Description: 缓存类型定义
 */
import { Dictionaries } from '@/enum'
export type Key = string
export type Expire = Dictionaries.permanent | number // 时间戳 永久
export interface Data<T> {
  value: T
  [Dictionaries.expire]: Expire
}
export interface Result<T> {
  message: string
  value: T | null
}
export interface StorageCls {
  get: <T>(key: Key) => void
  set: <T>(key: Key, value: T, expire: Expire) => void
  remove: (Key: Key) => void
  clear: () => void
}
