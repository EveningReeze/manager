<!--
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 14:18:51
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-01 17:00:41
 * @FilePath: \manager\src\layout\SubMneu\MenuList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-menu router default-active="2" class="el-menu-vertical-demo" :collapse="collapse" @open="handleOpen"
      @close="handleClose">
      <menu-item :menuList="MenuList"></menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuItem from './MenuItem.vue'

export default defineComponent({
  components: { MenuItem },
  props: {
    collapse: {
      type: Boolean
    }
  },
  setup () {
    const MenuList:unknown & any = [
      {
        path: '/',
        name: '首页',
        redirect: '',
        meta: {
          icon: ''
        },
        children: []
      },
      {
        path: '/userInfo',
        name: '用户管理',
        meta: {
          icon: ''
        },
        children: [
          {
            path: '/userList',
            name: '用户列表',
            meta: {
              icon: ''
            },
            children: [
            ]
          },
          {
            path: '/information',
            name: '用户信息',
            meta: {
              icon: ''
            },
            children: []
          },
          {
            path: '/userEdit',
            name: '用户信息编辑',
            meta: {
              icon: ''
            },
            children: []
          },
          {
            path: '/userAdd',
            name: '用户新增',
            meta: {
              icon: ''
            },
            children: []
          }
        ]
      }
    ]
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath, 'handleOpen')
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath, 'handleClose')
    }
    return {
      handleOpen,
      handleClose,
      MenuList
    }
  }
})
</script>
<style lang="scss" scoped>
.el-menu {
  height: calc(100vh - 60px);
}
</style>
