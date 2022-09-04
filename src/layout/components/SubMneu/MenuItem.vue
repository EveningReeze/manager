<!--
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 15:07:47
 * @LastEditors: EveningReeze Z17690728020@163.com
 * @LastEditTime: 2022-09-04 15:52:52
 * @FilePath: \manager\src\layout\components\SubMneu\MenuItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>

    <el-menu-item v-for="item in noChildren()" :key="item.path"  :index="item.path" @click="clickMenu(item)">
      <el-icon>
        <component :is="item.meta?.icon"></component>
      </el-icon>
      <template #title>{{item.label}}</template>
    </el-menu-item>
    <el-sub-menu v-for="item in hasChildren()" :key="item.path"  :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <span >{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="(subitem,subindex) in item.children" :key="subindex" :index="subitem.path" @click="clickMenu(subitem)">{{subitem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <!-- 递归遍历 -->
    <!-- <template v-for="item in menuList" :key="item.path">
      <el-sub-menu v-if="item.children && (item.children.length>0)" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta?.icon"></component>
          </el-icon>
          <span @click="handleCollapse(item)">{{item.meta?.title}}</span>
        </template>
        <menu-item :menuList="item.children"></menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <template #title>{{item.meta?.title}}</template>
      </el-menu-item>
    </template> -->
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from '@/store'
// import { IUserRouterItem } from './MenuList'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    hasChildren: {
      type: Function
    },
    noChildren: {
      type: Function
    }
    // menuList: {
    //   type: Array as PropType<IUserRouterItem[]>,
    //   default: () => []
    // },
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const clickMenu = (item:any) => {
      router.push({
        name: item.name
      })
      console.log(item, 'item----')
      store.commit('selectMneu', item)
    }

    return {
      clickMenu
    }
  }
})
</script>

<style scoped>
</style>
