<!--
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 14:14:13
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-01 17:11:31
 * @FilePath: \manager\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="`--el-aside-width: ${!collapse ? '235px' : '60px'}`">
        <MenuList :collapse="collapse"></MenuList>
      </el-aside>
      <el-container>
        <el-header>
          <el-row :gutter="20">
            <el-col :span="2">
              <span class="menu-collapse" @click="changeCollapse">
                <el-icon>
                  <Fold v-if="collapse" />
                  <Expand v-else />
                </el-icon>
              </span>
            </el-col>
            <el-col :span="20">
              <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="2">
              <span class="menu-collapse">
                <el-icon>
                  <UserFilled />
                </el-icon>
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    <!-- <el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon> -->
                    <el-icon class="el-icon--right">
                      <ArrowDownBold />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>个人信息</el-dropdown-item>
                      <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </span>
            </el-col>
          </el-row>

        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import MenuList from './components/SubMneu/MenuList.vue'
export default defineComponent({
  setup () {
    const collapse = ref(false)
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const changeCollapse = () => {
      collapse.value = !collapse.value
    }
    const handleCommand = (command: string | number | object) => {
      console.log(command)
    }
    return {
      collapse,
      changeCollapse,
      handleCommand
    }
  },
  components: { MenuList }
})
</script>

<style lang="scss" scoped>
.common-layout {
    .el-aside {
        overflow: hidden;
        // .el-menu-vertical-demo:not(.el-menu--collapse) {
        //     width: 235px;
        //     min-height: 400px;
        // }
    }
    .el-header {
        border: #4a4949 solid 1px;
        --el-header-height: 45px;
        --el-header-padding: 0;
        // [class*="el-col-"].is-guttered {
        //     display: flex;
        //     justify-content: space-around;
        // }
        .menu-collapse {
            height: 45px;
            line-height: 45px;
            text-align: center;
            font-size: 20px;
            padding: 0 5px;
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
                // display: flex;
                // align-items: center;
            }
        }
        // background-color: #545C64;
    }
}
</style>
