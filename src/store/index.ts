/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-02 17:09:36
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-02 17:34:58
 * @FilePath: \manager\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
export interface State {
  collapse: boolean
}

export const key: InjectionKey<Store<State>> = Symbol('some description')

export const store = createStore<State>({
  state: {
    collapse: false
  },
  mutations: {
    dataCollapse (state, payload) {
      state.collapse = !state.collapse
    }
  }
})
// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
