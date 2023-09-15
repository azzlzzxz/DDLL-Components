# 介绍

## fx-components

咚咚邻里业务组件库

## 静态网站脚手架架对比 dumi 与 Storybook

### dumi

开箱即用，快速上手 一条命令初始化一个站点模式的组件库开发脚手架

```shell
npx create-dumi
```

1. 优势：

   1. 文档模式的组件库开发脚手架,支持 markdown 文档并按照文件夹结构生成目录
   2. 文档默认按照文件夹的路径生成文档目录：例如组件库二级目录：通用、布局、导航、数据录入。我们项目可以直接按照这个分类划分就可生成，当然还支持自定义修改 md 文档即可。
   3. 支持在线 demo 演示，提供 codeSandbox 支持在线代码编辑。
   4. 本地文档直接引用 import { DatePicker } from 'antd' ，无需组件库发版，无需使用相对路径 import { DatePicker } from '../components/antd/datePicker'
   5. 主题：丰富的主题包（直接使用），还可以自定义进行扩展
   6. 更直观的代码展示，可以直接复制例子到业务代码中直接运行，API 自动生成：可基于 TypeScript 类型定义自动生成组件 API，组件永远『表里如一』
   7. 移动端组件库研发：安装主题包即可快速启用移动端组件研发能力，内置移动端高清渲染方案

2. 不足：

   1. 站点方式的脚手架目前只支持了 react，并没有支持 vue 框架。

[dumi 官网](https://d.umijs.org/guide)

### Storybook

storybook 是一套 UI 组件的开发环境，可以浏览组件库，查看每个组件的不同状态，交互式开发测试组件，目前支持 react、vue、angular 等前端框架。

```shell
npx storybook init
```

1. 优势：

   1. 支持在线 demo 演示，demo 在线预览。
   2. 在线修改组件参数查看不同参数下组件的表现，能够在文档中直接引用自己编写的组件。
   3. 文档 title 声明了这整个 stories 的页面在侧边栏的名字，以"/"分隔会被渲染成一级 / 二级目录
   4. 参数表格里的 control 部分更生动，例如下图 color 是一个颜色选择器，以此来提供更方便的交互体验。
   5. 支持 figma ui 设计工具

2. 不足：
   1. 并没有支持移动端的渲染。
   2. 不支持 markdown，使用 MDX 编写组件文档，缺点就是给出的例子书写方式跟业务调用方式不一致，而且例子的展示必须要用标签包裹，真正渲染组件的部分则是 story 里面的  {Template.bind({})}。

[storybook 官网](https://storybook.js.org/)

### 编译构建

1. storybook 预览环境整体基于 Webpack 构建，开发环境接近实际生产环境。
2. dumi 基于 father-build 构建。

### 可视化效果

1. storybook 展示环境实时可交互。
2. dumi 更偏向于文档友好可视化。

### 场景使用多元化

1. storybook 更像是一个画布，也像一个系统，可以做任何你想展示的东西
2. dumi 是一款为组件开发场景而生的文档工具，并且支持移动端的组件展示

### 总结

1. 如果你需要动态展示组件效果，把组件库做成一个系统做一些基于组件的可视化展示，并且可以支持多技术栈的组件展示，那么 storybook 是最佳的选择；
2. 如果你是需要一个体量很轻，快速开发一个组件可视化的教学文档，专注于组件和组件文档的展示说明，并且是基于 React 栈，那么 dumi 是一个好的选择。

## 组件库包管理工具 lerna 与 pnpm

### 什么是 monorepo

简单来说就是，将多个项目或包文件放到一个 git 仓库来管理。

```json
├── packages
|   ├── pkg1
|   |   ├── package.json
|   ├── pkg2
|   |   ├── package.json
├── package.json
```

之所以应用 monorepo，主要是解决以下问题：

1. 代码复用的问题（方便版本管理和依赖管理，模块之间的引用和调试也更加方便）。
2. 开发流程统一（统一代码库中的编码风格，统一的代码构建流程，统一生成 changeLog）。
3. 高效管理多项目/包（一个代码库内维护多个模块/包，便于查找）。

### pnpm

优势：

1. 安装速度最快（非扁平的包结构，没有 yarn/npm 的复杂的扁平算法，且只更新变化的文件）。
2. 节省磁盘空间 （统一安装包到磁盘的某个位置，项目中的 node_modules 通过 hard-link 的方式链接到实际的安装地址）。

目前，使用 npm/yarn 安装包是扁平结构（以前是嵌套结构，npm3 之后改为扁平结构）

1. 扁平结构: 就是安装一个包，那么这个包依赖的包将一起被安装到与这个包同级的目录下。
2. 嵌套结构: 就是一个包的依赖包会安装在这个包文件下的 node_modules 下，而依赖的依赖会安装到依赖包文件的 node_modules 下。依此类推。

```json
node_modules
├─ foo
  ├─ node_modules
     ├─ bar
       ├─ index.js
       └─ package.json
  ├─ index.js
  └─ package.json
```

问题：

1. 扁平结构存在问题：

   1. 依赖结构的不确定性（不同包依赖某个包的不同版本 最终安装的版本具有不确定性）可通过 lock 文件确定安装版本。
   2. 扁平化算法复杂，耗时
   3. 非法访问未声明的包

2. 嵌套结构的问题：
   1. 包文件的目录可能会非常长。
   2. 重复安装包。
   3. 相同包的实例不能共享。

解决：

1. 安装包的依赖包会被提升到.pnpm 里，其他包依赖这个包时也会软链接到这里。
2. 安装包和依赖包是通过硬链接到.pnpm store 中。
3. 软链接解决了磁盘空间占用的问题，而硬链接解决了包的同步更新和统一管理问题。

### lerna + yarn

[lerna](https://lerna.js.org/) 是一个优化基于 git+npm 的多 package 项目的管理工具。
优势：

1. 大幅减少重复操作
2. 提升操作的标准化

lerna 包管理的一些问题：

1. lerna add\clean\bootstrap 命令都是只对 packages 下项目有效，所以新拉项目安装依赖，需要 npm install + lerna bootstrap 一起才能安装上所有依赖。
2. lerna add 为 packages 下对应项目安装独立 node_modules ，不会在根目录下安装, 即不存在提升，所以相同依赖包会在每个 package 下重复安装一份。
3. 需要在根目录 node_modules 安装包要用 npm install。

所以，普遍会使用 yarn workspace 包管理 代替 lerna 包管理这部分，于是 lerna + yarn workspace 一起用，lerna 只管发布这部分

1. yarn 处理依赖安装工作（只想做好包管理工具）。
2. lerna 处理发布流程。

配置

```json
lerna.json
{
  ...
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

```json
package.json
{
  "private": true, // 工作空间不需要发布
  ...
  "workspaces": ["packages/*"]
}
```

### pnpm + changesets

配置:
[workspace](https://pnpm.io/zh/workspaces)新建 pnpm-workspace.yaml 文件，定义工作空间的根目录，并能够使您从工作空间中包含 / 排除目录 。 默认情况下，包含所有子目录。

```yaml
pnpm-workspace.yaml

packages:
  - 'packages/*'
```

此时 pnpm 会帮你提取公共依赖安装到根目录，同时会自动将版本匹配的 package 给 link。例如 packageA 中 import packageB，此时就会直接 import packageB 目录下的代码而不是从 npm 仓库下载。

1. 安全性配置
   为了防止我们的根目录被当作包发布，我们需要在 package.json 加入如下设置：

```shell
{
  "private": true
}
```

2. 安装全局依赖包

```shell
pnpm add typescript -Dw
```

3. 安装子包的依赖
   比如：我在 packages 目录下新建两个子包，分别为 utils 和 table，假如我要在 table 包下安装 react，那么，我们可以执行以下命令

```shell
pnpm --filter table add react
```

4. 项目/包之间的依赖
   packages 目录下的模块之间相互引用，怎么安装呢？
   比如 table 模块依赖 utils 模块，为了让依赖实时更新最新版本，使用用通配符更新版本。

```shell
pnpm add utils@* --filter table
```

4. 本地调试

```shell
pnpm add file:../fx-components/packages/table
```

#### 版本管理 changesets

1. 安装

```shell
pnpm add @changesets/cli -Dw
```

2. 初始化配置

```shell
npx changeset init
```

这个命令会在根目录下生成.changeset 文件夹，文件夹下包含一个 config 文件和一个 readme 文件。生成的 config 文件长这样：

```json
{
  "$schema": "https://unpkg.com/@changesets/config@2.3.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false, // 是否提交因changeset和changeset version引起的文件修改
  "fixed": [], // 设置一组共享版本的包 一个组里的包，无论有没有修改、是否有依赖，都会同步修改到相同的版本
  "linked": [], // 设置一组需要关联版本的包 有依赖关系或有修改的包会同步更新到相同版本 未修改且无依赖关系的包则版本不做变化
  "access": "public/restricted", // 发布为私有包/公共包
  "baseBranch": "main",
  "updateInternalDependencies": "patch", // 确保依赖包是否更新、更新版本的衡量单位
  "ignore": [] // 忽略掉的不需要发布的包
}
```

1. 每个包分别生成新版本。
2. 分别生成 changelog。
3. 一键发布。
4. changesets 相比于 lerna 最关键的地方在于更灵活和更细粒度的控制每个 package。

### lerna + pnpm

```json
lerna.json
{
  ...
  "npmClient": "pnpm",
  "useWorkspaces": true,
  "packages": ["packages/*"]
}
```

```yaml
pnpm-workspace.yaml

packages:
  - 'packages/*'
```

## 组件库介绍

对于平时开发/业务中所用到的高频出现的组件进行封装。

### 目录结构

```sh
├── .changest                    -----changest配置文件
├── .dumi                        -----dumi主题文件
├── .husky                       -----gitHook
├── docs                         -----静态网站文档
│   ├── index.md                 -----网站首页配置
│   ├── docs
│   ├── components
├── packages                     -----主包
│   ├── boundary
│     ├── es
│     ├── lib
│     ├── node_modules
│     ├── packages.json
│     ├── CHANFELOG.md           -----版本提交记录
│     ├── .fatherrc.ts           -----单组件打包配置文件
│     ├── src                    -----开发目录
│       ├── index.tsx
│       ├── demos                -----示例
│         ├── xxx.tsx
│       ├── xxx.md               -----组件文档
│     ...
│   └── components
│   └── form
│   └── table
├── script                       -----打包脚本
├── .dumirc.ts                   -----dumi配置文件
├── .fatherrc.base.ts            -----打包配置文件配置文件
├── .npmrc                       -----依赖提升设置
├── pnpm-worksace.yaml
├── pnpm-lock.json
├── package.json
└── README.md
```

### Table

1. [FXTable](/components/table)

### Form

1. [FXForm](/components/form)
2. [FXoginForm](/components/login-form)

### Boundary

1. [FXBoundary](/components/boundary)

### 后续开发中

1. Upload
2. Layout
3. ...

### 参考

1. [pnpm](https://pnpm.io/zh/)
2. [antd-procomponents](https://procomponents.ant.design/)
3. [antd](https://ant.design/index-cn)
