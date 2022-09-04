<template>
  <el-header>

  </el-header>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup () {
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
    console.log(current, 'current')

    return {
      // collapse,
      changeCollapse,
      handleCommand,
      current
    }
  }
})
</script>

<style lang="scss" scoped>
    .el-header {
        --el-header-height: 45px;
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
    }
</style>
