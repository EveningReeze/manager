/*
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 14:21:44
 * @LastEditors: @wangzisheng @Z17690728020@163.com
 * @LastEditTime: 2022-08-28 18:22:32
 * @FilePath: \manager\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/MenuList/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/HomePage',
        name: 'HomePage',
        meta: {
          isShow: true,
          title: '首页'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "HomePage" */ '../views/MenuList/HomePage.vue')
      },
      {
        path: '/UserList',
        name: 'UserList',
        meta: {
          isShow: true,
          title: '用户列表'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "UserList" */ '../views/MenuList/UserList.vue')
      },
      {
        path: '/UserManager',
        name: 'UserManager',
        meta: {
          isShow: true,
          title: '用户管理'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "UserList" */ '../views/MenuList/UserManager.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
