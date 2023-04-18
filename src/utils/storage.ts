/*
 * @Author: yangyongqian
 * @Date: 2023-04-08 18:14:25
 * @Description:
 */
// expire 过期时间 permanent 永久不过期
import { StorageCls, Key, Expire, Data, Result } from '@/types/storage'
import { Dictionaries } from '@/enum'

class Storage implements StorageCls {
  public set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    const data = {
      value,
      [Dictionaries.expire]: expire
    }
    localStorage.setItem(key, JSON.stringify(data))
  }
  public get<T>(key: Key): Result<T | null> {
    const value = localStorage.getItem(key)
    if (value) {
      const data: Data<T> = JSON.parse(value)
      const now = new Date().getTime()
      if (
        typeof data[Dictionaries.expire] === 'number' &&
        data[Dictionaries.expire] < now
      ) {
        this.remove(key)
        return {
          message: `您的${key}已过期`,
          value: null
        }
      } else {
        return {
          value: data.value,
          message: '成功'
        }
      }
    } else {
      return {
        message: '值无效',
        value: null
      }
    }
  }
  public remove(key: Key) {
    localStorage.removeItem(key)
  }
  public clear() {
    localStorage.clear()
  }
}

export default new Storage()
