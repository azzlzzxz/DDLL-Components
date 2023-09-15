## FX 业务组件

方便平时业务开发的复用，提高开发效率。

1. 采用本身大量出现的组件进行汇总。
2. 依靠 proComponents 进行更改，变成符合业务场景使用的组件。

## 通用配置

在 FXComponents 我们在组件使用了与 table 的相同的定义，同时扩展了部分字段。让其可以满足更多需求。

| 字段名称             | 类型                                                                           | 说明                                                                                  |
| -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `key`                | `React.key`                                                                    | 确定这个列的唯一值,一般用于 dataIndex 重复的情况                                      |
| `dataIndex`          | `React.key` \| `React.key[]`                                                   | 与实体映射的 key，数组会被转化 `[a,b] => Entity.a.b`                                  |
| `valueType`          | `ProFieldValueType`                                                            | 数据的渲渲染方式，我们自带了一部分，你也可以自定义 valueType                          |
| `title`              | `ReactNode` \|`(props,type,dom)=> ReactNode`                                   | 标题的内容，在 form 中是 label                                                        |
| `tooltip`            | `string`                                                                       | 会在 title 旁边展示一个 icon，鼠标浮动之后展示                                        |
| `valueEnum`          | `(Entity)=> ValueEnum` \| `ValueEnum`                                          | 支持 object 和 Map，Map 是支持其他基础类型作为 key                                    |
| `fieldProps`         | `(form,config)=>fieldProps`\| `fieldProps`                                     | 传给渲染的组件的 props，自定义的时候也会传递                                          |
| `formItemProps`      | `(form,config)=>formItemProps` \| `formItemProps`                              | 传递给 Form.Item 的配置                                                               |
| `renderText`         | `(text: any, record: Entity, index: number, action: ProCoreActionType) => any` | 修改的数据是会被 valueType 定义的渲染组件消费                                         |
| `render`             | `(dom,entity,index, action, schema) => React.ReactNode`                        | 自定义只读模式的 dom,`render` 方法只管理的只读模式，编辑模式需要使用 `renderFormItem` |
| `renderFormItem`     | `(schema,config,form) => React.ReactNode`                                      | 自定义编辑模式,返回一个 ReactNode，会自动包裹 value 和 onChange                       |
| `hideInForm`         | `boolean`                                                                      | 在 Form 中隐藏                                                                        |
| `hideInTable`        | `boolean`                                                                      | 在 Table 中隐藏                                                                       |
| `hideInSearch`       | `boolean`                                                                      | 在 Table 的查询表单中隐藏                                                             |
| `hideInDescriptions` | `boolean`                                                                      | 在 descriptions 中隐藏                                                                |

### valueType 列表

FXComponents 会根据 valueType 来映射成不同的表单项。以下是支持的常见表单项：

| valueType       | 说明                         |
| --------------- | ---------------------------- |
| `password`      | 密码输入框                   |
| `money`         | 金额输入框                   |
| `textarea`      | 文本域                       |
| `date`          | 日期                         |
| `dateTime`      | 日期时间                     |
| `dateWeek`      | 周                           |
| `dateMonth`     | 月                           |
| `dateQuarter`   | 季度输入                     |
| `dateYear`      | 年份输入                     |
| `dateRange`     | 日期区间                     |
| `dateTimeRange` | 日期时间区间                 |
| `time`          | 时间                         |
| `timeRange`     | 时间区间                     |
| `text`          | 文本框                       |
| `select`        | 下拉框                       |
| `treeSelect`    | 树形下拉框                   |
| `checkbox`      | 多选框                       |
| `rate`          | 星级组件                     |
| `radio`         | 单选框                       |
| `radioButton`   | 按钮单选框                   |
| `progress`      | 进度条                       |
| `percent`       | 百分比组件                   |
| `digit`         | 数字输入框                   |
| `second`        | 秒格式化                     |
| `avatar`        | 头像                         |
| `code`          | 代码框                       |
| `switch`        | 开关                         |
| `fromNow`       | 相对于当前时间               |
| `image`         | 图片                         |
| `jsonCode`      | 代码框，但是带了 json 格式化 |
| `color`         | 颜色选择器                   |
| `cascader`      | 级联选择器                   |

### valueEnum

valueEnum 需要传入一个枚举，ProTable 会自动根据值获取响应的枚举，并且在 form 中生成一个下拉框。看起来是这样的：

```ts | pure
const valueEnum = {
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
  },
};

// 也可以设置为一个function
const valueEnum = (row) =>
  row.isMe
    ? {
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      }
    : {
        open: {
          text: '等待解决',
          status: 'Error',
        },
        closed: {
          text: '已回应',
          status: 'Success',
        },
      };
```

> 这里值得注意的是在 form 中并没有 row，所以 row 的值为 null，你可以根据这个来判断要在 form 中显示什么选项。

当前列值的枚举

```typescript | pure
interface IValueEnum {
  [key: string]:
    | ReactNode
    | {
        text: ReactNode;
        status: 'Success' | 'Error' | 'Processing' | 'Warning' | 'Default';
      };
}
```
