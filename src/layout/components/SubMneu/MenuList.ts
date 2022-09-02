/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-09-01 16:15:47
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-09-02 14:07:01
 * @FilePath: \manager\src\layout\components\SubMneu\MenuList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 未使用
export interface IUserRouterItem {
  id:string;
  label:string;
  name?: string | undefined;
  path: string;
  redirect?: string;
  meta?: { icon: string};
  children?: IUserRouterItem[];
  component?: any;
}
export class IUserRouter {
  listData:IUserRouterItem[]=[]
}
