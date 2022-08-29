/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-08-29 14:21:00
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-08-29 16:59:34
 * @FilePath: \drugStore-web\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Pagination from './src/components/Pagination.vue'

/* 自定义的组件全局引用 */
const app = createApp(App)
// app.use(Pagination)
app.use(store).use(router).mount('#app')
