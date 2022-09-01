/*
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 14:21:44
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-01 16:59:21
 * @FilePath: \manager\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/MenuList/HomeView.vue'
import Layout from '../layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    meta: {
      icon: ''
    },
    component: () => import(/* webpackChunkName: "userInfo" */ '@/views/userInfo/index.vue'),
    children: [
      {
        path: '/userInfo/userList',
        name: 'userList',
        meta: {
          icon: ''
        },
        component: () => import(/* webpackChunkName: "userList" */ '@/views/userInfo/userList/index.vue'),
        children: [
        ]
      },
      {
        path: '/userInfo/information',
        name: 'information',
        meta: {
          icon: ''
        },
        component: () => import(/* webpackChunkName: "information" */ '@/views/userInfo/information/index.vue'),
        children: []
      },
      {
        path: '/userInfo/userEdit',
        name: 'userEdit',
        meta: {
          icon: ''
        },
        component: () => import(/* webpackChunkName: "userEdit" */ '@/views/userInfo/userEdit/index.vue'),
        children: []
      },
      {
        path: '/userInfo/userAdd',
        name: 'userAdd',
        meta: {
          icon: ''
        },
        component: () => import(/* webpackChunkName: "userAdd" */ '@/views/userInfo/userAdd/index.vue'),
        children: []
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
