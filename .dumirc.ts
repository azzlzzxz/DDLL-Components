/*
 * @Author: xinxu
 * @Date: 2023-02-13 18:19:37
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-31 10:14:48
 * @FilePath: /ddll-components/.dumirc.ts
 */
import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';
const theme = require('@ant-design/antd-theme-variable');

const headPkgList: string | string[] = [];
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@fx/${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src')])
  .reduce(
    (acc, val) => acc.concat({ type: 'component', dir: val.join(',') }),
    [],
  );

export default defineConfig({
  outputPath: 'dist',
  alias,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [...tailPkgList],
  },
  favicons: ['https://ddll.dongdonglinli.com/img/logo.png'],
  themeConfig: {
    name: 'FX-Component',
    logo: 'https://ddll.dongdonglinli.com/img/logo.png',
    nav: {
      'zh-CN': [
        { title: '文档', link: '/docs' },
        { title: '组件', link: '/components' },
      ],
    },
    sidebar: {
      '/components': [
        {
          title: '架构设计',
          children: [
            {
              title: 'Components - 组件设计',
              link: 'components',
            },
          ],
        },
        {
          title: '数据录入',
          children: [
            {
              title: 'FXForm - 自定义表单',
              link: '/components/form',
            },
            {
              title: 'FXogin - 登陆表单',
              link: '/components/login-form',
            },
          ],
        },
        {
          title: '数据展示',
          children: [
            {
              title: 'FXTable - 高级表格',
              link: '/components/table',
            },
          ],
        },
        {
          title: '边界展示',
          children: [
            {
              title: 'FXBoundary - 边界',
              link: '/components/boundary',
            },
          ],
        },
        {
          title: '上传展示',
          children: [
            {
              title: 'FXUpload - 上传',
              link: '/components/upload',
            },
          ],
        },
      ],
    },
  },
  theme: {
    '@s-content-width': '1600px',
    '@s-site-menu-width': '258px',
    '@ant-prefix': 'ant',
    '@root-entry-name': 'variable',
    ...theme,
    '@primary-color': '#1677FF',
    '@warning-color': '#faad14',
    '@heading-color': 'rgba(0, 0, 0, 0.85)',
    '@text-color': 'rgba(0, 0, 0, 0.65)',
    '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
    '@border-color-base': '#d9d9d9',
    '@border-color-split': 'rgba(0, 0, 0, 0.06)',
    '@border-radius-base': '4px',
    '@card-radius': '6px',
    '@table-border-radius-base': '6px',
    '@box-shadow-base':
      '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
  },
  extraBabelPlugins: ['@emotion'],
  ignoreMomentLocale: true,
});
