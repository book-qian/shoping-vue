/*
 * @Author: yangyongqian
 * @Date: 2023-03-29 09:09:55
 * @Description:
 */
import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'

createApp(App).use(router).mount('#app')
