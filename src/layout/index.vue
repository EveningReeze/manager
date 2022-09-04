<!--
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 14:14:13
 * @LastEditors: EveningReeze Z17690728020@163.com
 * @LastEditTime: 2022-09-04 16:41:31
 * @FilePath: \manager\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="`--el-aside-width: ${!$store.state.collapse ? '235px' : '50px'}`">
        <MenuList :collapse="$store.state.collapse"></MenuList>
      </el-aside>
      <el-container>
        <el-header>
          <el-row :gutter="20">
            <el-col :span="1">
              <span class="menu-collapse" @click="changeCollapse">
                <el-icon>
                  <Fold v-if="$store.state.collapse" />
                  <Expand v-else />
                </el-icon>
              </span>
            </el-col>
            <el-col :span="21">
              <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
                <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="2">
              <el-dropdown @command="handleCommand">
                <div class="el-dropdown-link lineH-left user-info">
                  <img class="user-img" src="@/assets/login-img/userimg.jpg" alt="">
                  admin
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
            <el-col :span="24">
              <tabs></tabs>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import MenuList from './components/SubMneu/MenuList.vue'
import { useRoute } from 'vue-router'
import { useStore } from '../store'
import Headers from './components/Header/Headers.vue'
import Tabs from './components/Header/Tabs.vue'
export default defineComponent({
  setup () {
    // const collapse = ref(false)
    const router = useRoute()
    console.log(router.matched, 'mached')
    const store = useStore()
    const changeCollapse = () => {
      store.state.collapse = !store.state.collapse
    }
    const handleCommand = (command: string | number | object) => {
      console.log(command)
    }
    const current = computed(() => {
      return store.state.currentMenu
    })
    console.log(current, 'current--')

    return {
      // collapse,
      changeCollapse,
      handleCommand,
      current
    }
  },
  components: { MenuList, Tabs }
})
</script>

<style lang="scss" scoped>
.common-layout {
    .el-aside {
        overflow: hidden;
    }
    .el-header {
        --el-header-height: 100px;
        --el-header-padding: 0;
        line-height: 45px;
        .menu-collapse {
            height: 45px;
            text-align: center;
            font-size: 25px;
            padding: 0 2px;
            color: #4a4949;
            cursor: pointer;
            .el-dropdown {
                vertical-align: initial;
                .el-icon--right {
                    margin-left: 3px;
                }
            }
            .example-showcase .el-dropdown-link {
                cursor: pointer;
                color: var(--el-color-primary);
            }
        }
        .el-breadcrumb {
            height: 45px;
            line-height: 45px;
            font-size: 16px;
        }
        .user-info {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 45px;
            text-align: center;
            font-size: 16px;
            padding: 0 2px;
            color: #4a4949;
            cursor: pointer;
            .user-img {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                margin-right: 3px;
            }
        }
    }
    .bread ::v-deep span {
        cursor: pointer !important;
    }
}
</style>
