/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-02 17:05:16
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-02 17:32:11
 * @FilePath: \manager\src\vuex.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    collapse: boolean
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
