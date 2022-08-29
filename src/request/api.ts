/*
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 16:12:15
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-08-29 16:00:37
 * @FilePath: \manager\src\request\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from './axios'

interface UserData{
  username:''
  password:''
  code:''
}

export function login (data:UserData) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}
export function MenuList () {
  return service({
    url: '/baseMenu/list',
    method: 'get'
  })
}
