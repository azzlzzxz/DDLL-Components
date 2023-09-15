/*
 * @Author: xinxu
 * @Date: 2023-03-11 09:43:52
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-11 09:44:32
 * @FilePath: /fx-components/packages/form/src/typing.ts
 */
export interface LoginData {
  loginType: string;
  logo: string;
  title: string;
  bgColor?: string;
  count?: number;
  onSubmit: (e: any) => void;
}
