<!--
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 14:18:51
 * @LastEditors: EveningReeze Z17690728020@163.com
 * @LastEditTime: 2022-09-04 13:24:16
 * @FilePath: \manager\src\layout\SubMneu\MenuList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-menu router :collapse-transition="false" default-active="2" class="el-menu-vertical-demo" :collapse="$store.state.collapse" @open="handleOpen"
      @close="handleClose">
      <h3 v-show="$store.state.collapse">后台</h3>
      <h3 v-show="!$store.state.collapse">后台管理系统</h3>
      <menu-item :noChildren="noChildren" :hasChildren="hasChildren"></menu-item>
      <!-- <menu-item :menuList="MenuList"></menu-item> -->
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuItem from './MenuItem.vue'

export default defineComponent({
  components: { MenuItem },
  setup () {
    const MenuList:unknown & any = [
      {
        path: '/',
        name: 'home',
        label: '首页',
        redirect: '',
        meta: {
          icon: 'TrendCharts'
        }
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        label: '用户管理',
        meta: {
          icon: 'TrendCharts'
        },
        children: [
          {
            path: '/userList',
            name: 'userList',
            label: '用户列表',
            meta: {
              icon: ''
            }
          },
          {
            path: '/information',
            name: 'information',
            label: '用户信息',
            meta: {
              icon: ''

            }
          },
          {
            path: '/userEdit',
            name: 'userEdit',
            label: '用户信息编辑',
            meta: {
              icon: ''

            }
          },
          {
            path: '/userAdd',
            name: 'userAdd',
            label: '用户新增',
            meta: {
              icon: ''

            }
          }
        ]
      }
    ]
    const noChildren = () => {
      return MenuList.filter((item:any) => !item.children)
    }
    const hasChildren = () => {
      return MenuList.filter((item:any) => item.children)
    }
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath, 'handleOpen')
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath, 'handleClose')
    }
    return {
      handleOpen,
      handleClose,
      // MenuList,
      hasChildren,
      noChildren
    }
  }
})
</script>
<style lang="scss" scoped>
.el-menu {
  height: calc(100vh - 60px);
}
</style>
