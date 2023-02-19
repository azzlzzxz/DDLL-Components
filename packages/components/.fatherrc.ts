/*
 * @Author: xinxu
 * @Date: 2023-02-19 13:43:17
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-19 13:43:35
 * @FilePath: /ddll-components/packages/form/.fatherrc.ts
 */
import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  umd: {
    name: 'DDLLComponents',
    output: 'dist',
  },
});
