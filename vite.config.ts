/*
 * @Author: yangyongqian
 * @Date: 2023-03-29 09:09:55
 * @Description: vite 配置文件
 */
import pathUrl from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: './',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': pathUrl.join(__dirname, 'src')
      }
    },
    build: {
      target: 'es2015',
      outDir: `frondCode`,
      assetsDir: 'static',
      cssCodeSplit: true,
      sourcemap: false
    },
    server: {
      host: true,
      port: 1025,
      https: false,
      open: true
    }
  })
}
