<!--
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 18:21:08
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-08-29 17:06:01
 * @FilePath: \manager\src\views\MenuList\UserList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="selectData.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="人员类型">
          <el-input v-model="selectData.personne" placeholder="请输入人员类型" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <div class="pageBox">
        <!-- <el-pagination :total="selectData.total" @pageChange="handleChangePage"></el-pagination> -->
      </div>
    </div>
  </div>

</template>

<script lang="ts">
// import pagination from './pagination.vue'
import { MenuList } from '@/request/api'
import { defineComponent, reactive, toRefs } from 'vue'
import { ListData } from '@/type/userList'
export default defineComponent({
  // components: {
  //   'el-pagination': pagination
  // },
  setup () {
    const data = reactive(new ListData())
    MenuList().then((res) => {
      data.list = res.data
      data.selectData.total = res.data.total
      console.log(res, 'res----')
    })
    // const
    const onSubmit = (item:any) => {
      console.log('111')
    }
    // const handleChangePage = (item:any) => {
    //   data.selectData.page = item.currentPage
    //   data.selectData.pagesize = item.pageSize
    //   MenuList()
    // }
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style scoped>
</style>
