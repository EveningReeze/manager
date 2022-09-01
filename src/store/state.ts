/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 14:28:54
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-01 14:29:26
 * @FilePath: \manager\src\store\state.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      collapse: false
    }
  },
  actions: {
  }

})
