/*
 * @Author: xinxu
 * @Date: 2023-02-13 18:19:37
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-19 13:39:21
 * @FilePath: /ddll-components/.fatherrc.ts
 */
import { defineConfig } from 'father';

export default defineConfig({
  // 以下为 esm 配置项启用时的默认值，有自定义需求时才需配置
  esm: {
    input: 'src', // 默认编译目录
    output: 'es',
    platform: 'browser', // 默认构建为 Browser 环境的产物
    transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
  },
  // 以下为 cjs 配置项启用时的默认值，有自定义需求时才需配置
  cjs: {
    extraBabelPlugins: [[require.resolve('./scripts/replaceLib'), { 1: 'b' }]],
    input: 'src', // 默认编译目录
    output: 'lib',
    platform: 'browser', // 默认构建为 Node.js 环境的产物
    transformer: 'babel', // 默认使用 esbuild 以获得更快的构建速度
  },
});
