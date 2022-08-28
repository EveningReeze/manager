/*
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 15:28:20
 * @LastEditors: @wangzisheng @Z17690728020@163.com
 * @LastEditTime: 2022-08-28 15:36:34
 * @FilePath: \manager\src\type\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface LoginFrom{
    username:'',
    password:'',
    code: ''
}
export class LoginData {
    ruleForm: LoginFrom={
      username: '',
      password: '',
      code: ''
    }
}
