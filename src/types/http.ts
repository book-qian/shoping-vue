/*
 * @Author: yangyongqian
 * @Date: 2023-04-07 11:23:32
 * @Description:
 */
type Config = {
  url: string
}
interface Response {
  config: Config
}
export interface ResponseErr {
  response: any
  message: string
}
