
export interface IUserRouterItem {
  name?: string | undefined;
  path: string;
  redirect?: string;
  meta?: { icon: string, isShow:boolean };
  children?: IUserRouterItem[];
  component?: any;
}
