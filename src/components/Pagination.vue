<!--
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-08-29 16:26:08
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-08-29 16:50:51
 * @FilePath: \drugStore-web\src\components\pagination.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageParams.currentPage"
          :page-size="pageParams.pageSize"
          :page-sizes="pageSizes"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
      ></el-pagination>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, defineEmits, defineProps } from 'vue'
const emits = defineEmits(['pageChange'])
const props = defineProps({
  total: {
    type: Number,
    default: 0
  }
})
const pageParams = reactive({
  currentPage: 1,
  pageSize: 10
})
const pageSizes = ref([1, 2, 30, 50, 100])

// 改变每页展示的数据条数
const handleSizeChange = (val:any) => {
  pageParams.pageSize = val
  emits('pageChange', pageParams)
}
// 改变当前页的页码
const handleCurrentChange = (val:any) => {
  pageParams.currentPage = val
  emits('pageChange', pageParams)
}

</script>

<style scoped>

</style>
