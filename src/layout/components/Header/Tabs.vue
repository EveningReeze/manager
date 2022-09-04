<!--
 * @Author: EveningReeze Z17690728020@163.com
 * @Date: 2022-09-04 16:11:05
 * @LastEditors: EveningReeze Z17690728020@163.com
 * @LastEditTime: 2022-09-04 17:04:32
 * @FilePath: \manager\src\layout\components\Header\Tabs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="tags">
        <el-tag
        v-for="(item,index) in tags"
        :key="index"
        :closable="item.name !=='home'"
        :disable-transitions="false"
        :effect="$route.name === item.name ? 'dark':'plain'"
        @click="changMneu(item)"
        @close="handleClose(item,index)"
        >{{item.label}}</el-tag>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
export default defineComponent({
  setup () {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const tags = store.state.tabsList
    const changMneu = (item:any) => {
      router.push({ name: item.name })
    }
    const handleClose = (item:any, index:any) => {
      const length = tags.length - 1
      store.commit('closeTab', item)
      if (item.name !== route.name) {
        return console.log(item.name)
      }
      if (index === length) {
        router.push({
          name: tags[index - 1].name
        })
      } else {
        router.push({
          name: tags[index].name
        })
      }
    }
    return {
      tags,
      changMneu,
      handleClose
    }
  }
})
</script>

<style lang="scss" scoped>
.tags{
    width: 100%;
    // padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>
