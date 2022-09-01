<!--
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 15:07:47
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-01 16:34:24
 * @FilePath: \manager\src\layout\components\SubMneu\MenuItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <el-sub-menu v-if="item.children && (item.children.length>0)" :index="item.path">
        <template #title>
          <el-icon>
            <!-- <location /> -->
            <component :is="item.meta?.icon"></component>
          </el-icon>
          <span>{{item.name}}</span>
        </template>
        <menu-item :menuList="item.children"></menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </template>
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IUserRouterItem } from './MenuList'
export default defineComponent({
  props: {
    menuList: {
      type: Array as PropType<IUserRouterItem[]>,
      default: () => []
    }
    // item: {
    //   type: Object,
    //   default: {}
    // }
    // collapse: {
    //   type: Boolean,
    // },
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
