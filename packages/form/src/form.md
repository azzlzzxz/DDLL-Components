<!--
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2023-03-21 18:53:15
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-22 15:21:53
-->

# FXForm 表单

通过对 antd 进行封装，让 form 表单使用起来更方便

## 代码演示

<code src="./demos/FXFrom/index.tsx" background="hsl(220,23%,97%)" title="自定义表单"></code>

## API

FXForm 在 antd 的 Form 上进行了一层封装。这里只列出与 antd Form 不同的 api。
| 参数 | 说明 | 类型 | 默认值 |
| --------- | ------------------------------------- | -------------------- | ------- |
| config | 表单的每一项 | `FormConfigItem[]` | [] |
| labelWidth | label 宽度 | `number | 'auto'` | 100 |
| defaultColsNumber |默认显示的表单控件数量 | `number` | - |
| defaultCollapsed | 默认状态下是否折叠超出的表单项 | `boolean` | true |
| onSubmit | 提交回调函数 | `(params) => void` | - |
| onReset | 重置回调函数 | `() => void` | - |
| renderButtons | 渲染按钮组件 | `Function` | - |
| collapseClassName | collapse 样式 | `string | undefined` | - |

### FormConfigItem

下面只列出和 Form.Item 不一样的 api

| 参数        | 说明               | 类型                  | 默认值 |
| ----------- | ------------------ | --------------------- | ------ |
| name        | 控件的名字         | `string`              | -      |
| type        | 控件的类型         | `React.ComponentType` | -      |
| title       | 标题，可以配置为空 | `ReactNode`           | -      |
| colSize     | 该控件占多少份     | `number`              | -      |
| customProps | 配置               | `any`                 | -      |

customProps 里面，可以以对象形式写入 antd 中 Form 表单项对应的 api。
