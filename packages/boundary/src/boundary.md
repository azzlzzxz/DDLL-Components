<!--
 * @Author: xinxu
 * @Date: 2023-03-22 11:35:13
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-23 09:44:30
 * @FilePath: /fx-components/packages/boundary/src/boundary.md
-->

# FXBoundary

统一配置错误边界、404 等。

## 代码演示

<code src="./demos/boundary.tsx" background="hsl(220,23%,97%)" title="错误边界"></code>

<code src="./demos/404.tsx" background="hsl(220,23%,97%)" title="404"></code>

## API

| 参数     | 说明                       | 类型                                                                   | 默认值   |
| -------- | -------------------------- | ---------------------------------------------------------------------- | -------- |
| extra    | 操作区                     | ReactNode                                                              | -        |
| icon     | 自定义 icon                | ReactNode                                                              | -        |
| status   | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `error ` |
| subTitle | subTitle 文字              | ReactNode                                                              | -        |
| title    | title 文字                 | ReactNode                                                              | -        |
| children | 子节点                     | ReactNode                                                              | -        |
| isIE     | 是否过滤 IE                | boolean                                                                | true     |
