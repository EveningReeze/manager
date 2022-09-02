/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-08-29 14:21:00
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-02 17:18:19
 * @FilePath: \drugStore-web\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
/* 自定义的组件全局引用 */
app.use(store, key)
app.use(router)
app.mount('#app')
