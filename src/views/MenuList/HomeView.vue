<!--
 * @Author: @wangzisheng @Z17690726020@163.com
 * @Date: 2022-08-28 14:21:44
 * @LastEditors: @wangzisheng @Z17690728020@163.com
 * @LastEditTime: 2022-08-28 18:41:47
 * @FilePath: \manager\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-left">
              医疗服务管理系统
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content">
              <h2>后台管理系统</h2>
            </div>
          </el-col>
          <el-col :span="4">
            <span class="grid-right">
              人员信息
            </span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- @open="handleOpen" @close="handleClose" -->
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2" text-color="#fff" router >
            <!-- <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <location />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu> -->
            <!-- <el-menu-item index="2">
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item> -->
            <!-- <el-menu-item index="3" disabled>
              <el-icon>
                <document />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item> -->
            <el-menu-item :index="item.path" v-for="item in MenuList" :key="item.path">
              <el-icon>
                <setting />
              </el-icon>
              <span>{{item.meta.title}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { log } from 'console'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup () {
    const router = useRouter()
    const MenuList = router.getRoutes().filter(i => i.meta.isShow)
    console.log(MenuList)
    return {
      MenuList
    }
  }
})
</script>
<style lang="scss" scoped>
.common-layout {
    .el-header {
        background-color: #666;
        .grid-left {
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 18px;
        }
        .grid-content {
            height: 60px;
            line-height: 60px;
            text-align: center;
        }
        .grid-right {
            font-size: 18px;
            height: 60px;
            line-height: 60px;
            text-align: center;
        }
    }
    .el-aside{

      .el-menu{
        height: calc(100vh - 60px);
      }
    }
}
</style>
