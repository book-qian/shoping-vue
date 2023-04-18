/*
 * @Author: yangyongqian
 * @Date: 2023-03-29 09:09:55
 * @Description: 环境变量类型补充
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_URL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
