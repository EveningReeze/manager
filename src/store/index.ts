/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-02 17:09:36
 * @LastEditors: EveningReeze Z17690728020@163.com
 * @LastEditTime: 2022-09-04 16:54:36
 * @FilePath: \manager\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
export interface State {
  collapse: boolean,
  currentMenu:any,
  tabsList:any
}
export const key: InjectionKey<Store<State>> = Symbol('some description')

export const store = createStore<State>({
  state: {
    collapse: false,
    currentMenu: {} || null,
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        redirect: '',
        meta: {
          icon: 'TrendCharts'
        }
      }
    ]
  },
  mutations: {
    // updataCollapse (state, payload) {
    //   state.collapse = !state.collapse
    // },
    selectMneu (state, val) {
      console.log(val, 'val----', val.name)
      // eslint-disable-next-line no-constant-condition
      val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
      if (val.name === 'home') {
        state.currentMenu = null
      } else {
        state.currentMenu = val
        const result:any = state.tabsList.findIndex((item:any) => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''
      }
    },
    closeTab (state, val) {
      const res:any = state.tabsList.findIndex((item:any) => item.name === val.name)
      state.tabsList.splice(res, 1)
    }
  }
})
// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
