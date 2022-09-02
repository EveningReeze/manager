/*
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 14:21:44
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-02 15:24:31
 * @FilePath: \manager\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/MenuList/HomeView.vue'
import Layout from '../layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        meta: {
          title: '用户管理'
        },
        component: () => import(/* webpackChunkName: "userInfo" */ '@/views/userInfo/index.vue')
      },
      {
        path: '/userList',
        name: 'userList',
        meta: {
          title: '用户列表'
        },
        component: () => import(/* webpackChunkName: "userList" */ '@/views/userInfo/userList/index.vue')

      },
      {
        path: '/information',
        name: 'information',
        meta: {
          title: '用户信息'
        },
        component: () => import(/* webpackChunkName: "information" */ '@/views/userInfo/information/index.vue')
      },
      {
        path: '/userEdit',
        name: 'userEdit',
        meta: {
          title: '用户信息编辑'
        },
        component: () => import(/* webpackChunkName: "userEdit" */ '@/views/userInfo/userEdit/index.vue')
      },
      {
        path: '/userAdd',
        name: 'userAdd',
        meta: {
          title: '用户新增'
        },
        component: () => import(/* webpackChunkName: "userAdd" */ '@/views/userInfo/userAdd/index.vue')
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
