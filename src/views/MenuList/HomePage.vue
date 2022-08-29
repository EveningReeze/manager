<!--
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 18:05:36
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-08-29 14:26:46
 * @FilePath: \manager\src\views\MenuList\HomePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div ref="myChart" :style="{ width: '600px', height: '600px' }"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'home',
  components: {
  },
  setup () {
    const myChart = ref<HTMLElement>() // 也可以用const myChart = ref<any>();
    console.log(myChart)
    const myCharts = ref<any>()
    setTimeout(() => {
      // 绘制图表
      myCharts.value = echarts.init(myChart.value!)
      myCharts.value.setOption({
        title: { text: '降水量' },
        tooltip: {},
        xAxis: {
          data: ['6-3', '6-4', '6-5', '6-6', '6-7', '6-8']
        },
        yAxis: {},
        series: [
          {
            name: '降水量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }, 10)
    return {
      myChart
    }
  }
})
</script>

<style scoped>

</style>
