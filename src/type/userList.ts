/*
 * @Author: WolfKing Z17690728020@163.com
 * @Date: 2022-08-29 14:59:57
 * @LastEditors: WolfKing Z17690728020@163.com
 * @LastEditTime: 2022-08-29 16:13:34
 * @FilePath: \drugStore-web\src\type\userList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ListFrom{
  menuCode:string,
  menuName:string,
  parentCode:string,
  children:[],
}
interface selectDataIn{
  name:string,
  personne:string
  page:number, // 页码
  pagesize:number, // 一页多少条
  total:number // 总条数
}
export class ListData {
  selectData:selectDataIn={
    name: '',
    personne: '',
    page: 1,
    pagesize: 10,
    total: 0
  }

  list:ListFrom[] = [] // 展示内容数据
}
