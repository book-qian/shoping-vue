/*
 * @Author: yangyongqian
 * @Date: 2023-04-07 09:06:47
 * @Description: 路由实例定义
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/register',
      component: () => import('@/components/Register.vue')
    },
    {
      path: '/goodList',
      component: () => import('@/views/list.vue')
    },
    {
      path: '/goodDetail',
      component: () => import('@/views/goodDetail.vue')
    },
    {
      path: '/carts',
      component: () => import('@/views/carts.vue')
    }
  ]
})

export default router
