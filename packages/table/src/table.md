---
title: FXTable - 高级表格
order: 0
legacy: /table
---

# FXTable - 高级表格

## 代码演示

### 查询表格

<code src="./demos/single.tsx" background="hsl(220,23%,97%)" title="查询表格"></code>

## API

FXTable 在 antd 的 Table 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 antd Table 不同的 api。

### FXTable

| 属性               | 描述                                                                 | 类型                                                                                                                                                     | 默认值                                               |
| ------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| defaultData        | 默认的数据                                                           | `T[]`                                                                                                                                                    | -                                                    |
| dataSource         | Table 的数据，FXTable 推荐使用 request 来加载                        | `T[]`                                                                                                                                                    | -                                                    |
| onDataSourceChange | Table 的数据发生改变时触发                                           | `(dataSource: T[]) => void`                                                                                                                              | -                                                    |
| actionRef          | Table action 的引用，便于自定义触发                                  | `MutableRefObject<ActionType>`                                                                                                                           | -                                                    |
| formRef            | 可以获取到查询表单的 form 实例，用于一些灵活的配置                   | `MutableRefObject<FormInstance>`                                                                                                                         | -                                                    |
| toolBarRender      | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right           | `(action) => ReactNode[]`                                                                                                                                | -                                                    |
| onLoad             | 数据加载完成后触发,会多次触发                                        | `(dataSource: T[]) => void`                                                                                                                              | -                                                    |
| onLoadingChange    | loading 被修改时触发，一般是网络请求导致的                           | `(loading:boolean)=>void`                                                                                                                                | -                                                    |
| onRequestError     | 数据加载失败时触发                                                   | `(error) => void`                                                                                                                                        | -                                                    |
| tableClassName     | 封装的 table 的 className                                            | `string`                                                                                                                                                 | -                                                    |
| tableStyle         | 封装的 table 的 style                                                | [CSSProperties](https://www.htmlhelp.com/reference/css/properties.html)                                                                                  | -                                                    |
| options            | table 工具栏，设为 false 时不显示.传入 function 会点击时触发         | `{{ density?: boolean, fullScreen: boolean \| function, reload: boolean \| function, setting: boolean \|` [SettingOptionType](#菜单栏-options-配置) `}}` | `{ fullScreen: false, reload: true, setting: true }` |
| search             | 是否显示搜索表单，传入对象时为搜索表单的配置                         | `false` \| [SearchConfig](#search-搜索表单)                                                                                                              | -                                                    |
| defaultSize        | 默认的 size                                                          | SizeType                                                                                                                                                 | -                                                    |
| dateFormatter      | 转化 moment 格式数据为特定类型，false 不做转化                       | `"string"` \| `"number"` \| ((value: Moment, valueType: string) => string \| number) \| `false`                                                          | `"string"`                                           |
| beforeSearchSubmit | 搜索之前进行一些修改                                                 | `(params:T)=>T`                                                                                                                                          | -                                                    |
| onSizeChange       | table 尺寸发生改变                                                   | `(size: 'default' \| 'middle' \| 'small') => void`                                                                                                       | -                                                    |
| type               | fx-table 类型                                                        | `"form"`                                                                                                                                                 | -                                                    |
| form               | antd form 的配置                                                     | [FormProps](https://ant.design/components/form-cn/#API)                                                                                                  | -                                                    |
| onSubmit           | 提交表单时触发                                                       | `(params: U) => void`                                                                                                                                    | -                                                    |
| onReset            | 重置表单时触发                                                       | `() => void`                                                                                                                                             | -                                                    |
| columnEmptyText    | 空值时的显示，不设置时显示 `-`， false 可以关闭此功能                | `string` \| `false`                                                                                                                                      | false                                                |
| tableRender        | 自定义渲染表格函数                                                   | `(props,dom,domList:{ toolbar,alert,table}) => ReactNode`                                                                                                | -                                                    |
| toolbar            | 透传 `ListToolBar` 配置项                                            | [ListToolBarProps](#listtoolbarprops)                                                                                                                    | -                                                    |
| tableExtraRender   | 自定义表格的主体函数                                                 | `(props: FXTableProps<T, U>, dataSource: T[]) => ReactNode;`                                                                                             | -                                                    |
| manualRequest      | 是否需要手动触发首次请求, 配置为 `true` 时不可隐藏搜索表单           | `boolean`                                                                                                                                                | false                                                |
|                    |
| cardBordered       | Table 和 Search 外围 Card 组件的边框                                 | `boolean \| {search?: boolean, table?: boolean}`                                                                                                         | false                                                |
| debounceTime       | 防抖时间                                                             | `number`                                                                                                                                                 | 10                                                   |
| revalidateOnFocus  | 窗口聚焦时自动重新请求                                               | `boolean`                                                                                                                                                | `true`                                               |
| columnsState       | 受控的列状态，可以操作显示隐藏                                       | `columnsStateType`                                                                                                                                       | -                                                    |
| ErrorBoundary      | 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 | `ReactNode`                                                                                                                                              | 内置 ErrorBoundary                                   |

#### RecordCreator

| 属性             | 描述                                                                | 类型              | 默认值   |
| ---------------- | ------------------------------------------------------------------- | ----------------- | -------- |
| record           | 需要新增的行数据，一般来说包含唯一 key                              | `T`               | `{}`     |
| position         | 行增加在哪里，开始或者末尾                                          | `top` \| `bottom` | `bottom` |
| (...buttonProps) | antd 的 [ButtonProps](https://ant.design/components/button-cn/#API) | ButtonProps       | —        |

#### ColumnsStateType

| 属性            | 描述                                                                                            | 类型                                         | 默认值 |
| --------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------- | ------ |
| defaultValue    | 列状态的默认值，只有初次生效                                                                    | `Record<string, ColumnsState>;`              | -      |
| value           | 列状态的值，支持受控模式                                                                        | `Record<string, ColumnsState>;`              | -      |
| onChange        | 列状态的值发生改变之后触发                                                                      | `(value:Record<string, ColumnsState>)=>void` | -      |
| persistenceKey  | 持久化列的 key，用于判断是否是同一个 table                                                      | `string \| number`                           | -      |
| persistenceType | 持久化列的类类型， localStorage 设置在关闭浏览器后也是存在的，sessionStorage 关闭浏览器后会丢失 | `localStorage \| sessionStorage`             | -      |

#### Search 搜索表单

| 属性             | 描述                         | 类型                                                              | 默认值           |
| ---------------- | ---------------------------- | ----------------------------------------------------------------- | ---------------- |
| filterType       | 过滤表单类型                 | `'query'` \| `'light'`                                            | `'query'`        |
| searchText       | 查询按钮的文本               | `string`                                                          | 查询             |
| resetText        | 重置按钮的文本               | `string`                                                          | 重置             |
| submitText       | 提交按钮的文本               | `string`                                                          | 提交             |
| labelWidth       | 标签的宽度                   | `'number'` \| `'auto'`                                            | 80               |
| span             | 配置查询表单的列数           | `'number'` \| [`'ColConfig'`](#ColConfig)                         | defaultColConfig |
| className        | 封装的搜索 Form 的 className | `string`                                                          | -                |
| collapseRender   | 收起按钮的 render            | `(collapsed: boolean,showCollapseButton?: boolean,) => ReactNode` | -                |
| defaultCollapsed | 默认是否收起                 | `boolean`                                                         | `true`           |
| collapsed        | 是否收起                     | `boolean`                                                         | -                |
| onCollapse       | 收起按钮的事件               | `(collapsed: boolean) => void;`                                   | -                |
| optionRender     | 自定义操作栏                 | `((searchConfig,formProps,dom) => ReactNode[])`\|`false`          | -                |
| showHiddenNum    | 是否显示收起之后显示隐藏个数 | `boolean`                                                         | `false`          |

#### ColConfig

```tsx | pure
const defaultColConfig = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 6,
};
```

#### 菜单栏 options 配置

```tsx | pure
export type OptionsType =
  | ((e: React.MouseEvent<HTMLSpanElement>, action?: ActionType) => void)
  | boolean;

export type OptionConfig = {
  density?: boolean;
  fullScreen?: OptionsType;
  reload?: OptionsType;
  setting?: boolean | SettingOptionType;
  search?: (OptionSearchProps & { name?: string }) | boolean;
};

export type SettingOptionType = {
  draggable?: boolean;
  checkable?: boolean;
  checkedReset?: boolean;
  listsHeight?: number;
  extra?: React.ReactNode;
  children?: React.ReactNode;
};
```

### Columns 列定义

| 属性                                   | 描述                                                                                                                                           | 类型                                                                                                  | 默认值 |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| title                                  | 与 antd 中基本相同，但是支持通过传入一个方法                                                                                                   | `ReactNode \| ((config: FXColumnType<T>, type: FXTableTypes) => ReactNode)`                           | -      |
| tooltip                                | 会在 title 之后展示一个 icon，hover 之后提示一些信息                                                                                           | `string`                                                                                              | -      |
| ellipsis                               | 是否自动缩略                                                                                                                                   | `boolean` \| `{showTitle?: boolean}`                                                                  | -      |
| copyable                               | 是否支持复制                                                                                                                                   | `boolean`                                                                                             | -      |
| valueEnum                              | 值的枚举，会自动转化把值当成 key 来取出要显示的内容                                                                                            | [valueEnum](/components)                                                                              | -      |
| valueType                              | 值的类型,会生成不同的渲染器                                                                                                                    | [`valueType`](/components)                                                                            | `text` |
| order                                  | 查询表单中的权重，权重大排序靠前                                                                                                               | `number`                                                                                              | -      |
| fieldProps                             | 查询表单的 props，会透传给表单项,如果渲染出来是 Input,就支持 input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入 | `(form,config)=>Record \| Record`                                                                     | -      |
| `formItemProps`                        | 传递给 Form.Item 的配置,可以配置 rules，但是默认的查询表单 rules 是不生效的。需要配置 `ignoreRules`                                            | `(form,config)=>formItemProps` \| `formItemProps`                                                     | -      |
| renderText                             | 类似 table 的 render，但是必须返回 string，如果只是希望转化枚举，可以使用 [valueEnum](/components/schema#valueenum)                            | `(text: any,record: T,index: number,action: UseFetchDataAction<T>) => string`                         | -      |
| render                                 | 类似 table 的 render，第一个参数变成了 dom,增加了第四个参数 action                                                                             | `(text: ReactNode,record: T,index: number,action: UseFetchDataAction<T>) => ReactNode \| ReactNode[]` | -      |
| renderFormItem                         | 渲染查询表单的输入组件                                                                                                                         | `(item,{ type, defaultRender, formItemProps, fieldProps, ...rest },form) => ReactNode`                | -      |
| search                                 | 配置列的搜索相关，false 为隐藏                                                                                                                 | `false` \| `{ transform: (value: any) => any }`                                                       | true   |
| search.transform                       | 转化值的 key, 一般用于时间区间的转化                                                                                                           | `(value: any) => any`                                                                                 | -      |
| [editable](/components/editable-table) | 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样                                                                                    | `false` \| `(text: any, record: T,index: number) => boolean`                                          | true   |
| colSize                                | 一个表单项占用的格子数量, `占比= colSize*span`，`colSize` 默认为 1 ，`span` 为 8，`span`是`form={{span:8}}` 全局设置的                         | `number`                                                                                              | -      |
| hideInSearch                           | 在查询表单中不展示此项                                                                                                                         | `boolean`                                                                                             | -      |
| hideInTable                            | 在 Table 中不展示此列                                                                                                                          | `boolean`                                                                                             | -      |
| hideInForm                             | 在 Form 中不展示此列                                                                                                                           | `boolean`                                                                                             | -      |
| hideInDescriptions                     | 在 Descriptions 中不展示此列                                                                                                                   | `boolean`                                                                                             | -      |
| filters                                | 表头的筛选菜单项，当值为 true 时，自动使用 valueEnum 生成                                                                                      | `boolean` \| `object[]`                                                                               | false  |
| onFilter                               | 筛选表单，为 true 时使用 FXTable 自带的，为 false 时关闭本地筛选                                                                               | `(value, record) => boolean` \| `false`                                                               | false  |
| request                                | 从服务器请求枚举                                                                                                                               | [request](https://procomponents.ant.design/components/schema#request-%E5%92%8C-params)                | -      |
| initialValue                           | 查询表单项初始值                                                                                                                               | `any`                                                                                                 | -      |
| disable                                | 列设置中`disabled`的状态                                                                                                                       | `boolean` \| `{ checkbox: boolean; }`                                                                 | -      |

### valueType 值类型

FXTable 封装了一些常用的值类型来减少重复的 `render` 操作，配置一个 [`valueType`](/components) 即可展示格式化响应的数据。

### 批量操作

与 antd 相同，批量操作需要设置 `rowSelection` 来开启，与 antd 不同的是，pro-table 提供了一个 alert 用于承载一些信息。你可以通过 `tableAlertRender`和 `tableAlertOptionRender` 来对它进行自定义。设置或者返回 false 即可关闭。

| 属性                   | 描述                                                       | 类型                                                                                                | 默认值 |
| ---------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| alwaysShowAlert        | 总是展示 alert，默认无选择不展示（`rowSelection`内置属性） | `boolean`                                                                                           | -      |
| tableAlertRender       | 自定义批量操作工具栏左侧信息区域, false 时不显示           | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | -      |
| tableAlertOptionRender | 自定义批量操作工具栏右侧选项区域, false 时不显示           | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | -      |

### 搜索表单

FXTable 会根据列来生成一个 Form，用于筛选列表数据。

按照规范，table 的表单不需要任何的必选参数。

Form 的列是根据 `valueType` 来生成不同的类型,详细的值类型请查看[通用配置](/components)。

> valueType 为 index indexBorder option 和没有 dataIndex 和 key 的列将会忽略。

#### ListToolBarProps

列表和表格的工具栏配置属性

| 参数         | 说明                                           | 类型                         | 默认值  |
| ------------ | ---------------------------------------------- | ---------------------------- | ------- |
| title        | 标题                                           | `ReactNode`                  | -       |
| subTitle     | 子标题                                         | `ReactNode`                  | -       |
| description  | 描述                                           | `ReactNode`                  | -       |
| search       | 查询区                                         | `ReactNode` \| `SearchProps` | -       |
| actions      | 操作区                                         | `ReactNode[]`                | -       |
| settings     | 设置区                                         | `(ReactNode \| Setting)[]`   | -       |
| filter       | 过滤区，通常配合 `LightFilter` 使用            | `ReactNode`                  | -       |
| multipleLine | 是否多行展示                                   | `boolean`                    | `false` |
| menu         | 菜单配置                                       | `ListToolBarMenu`            | -       |
| tabs         | 标签页配置，仅当 `multipleLine` 为 true 时有效 | `ListToolBarTabs`            | -       |

SearchProps 为 antd 的 [Input.Search](https://ant.design/components/input-cn/#Input.Search) 的属性。

#### Setting

| 参数    | 说明         | 类型                  | 默认值 |
| ------- | ------------ | --------------------- | ------ |
| icon    | 图标         | `ReactNode`           | -      |
| tooltip | tooltip 描述 | `string`              | -      |
| key     | 操作唯一标识 | `string`              | -      |
| onClick | 设置被触发   | `(key: string)=>void` | -      |

#### ListToolBarMenu

| 参数      | 说明           | 类型                                  | 默认值   |
| --------- | -------------- | ------------------------------------- | -------- |
| type      | 类型           | `inline` \| `dropdown` \| `tab`       | `inline` |
| activeKey | 当前值         | `string`                              | -        |
| items     | 菜单项         | `{ key: string; label: ReactNode }[]` | -        |
| onChange  | 切换菜单的回调 | `(activeKey)=>void`                   | -        |

#### ListToolBarTabs

| 参数      | 说明           | 类型                                | 默认值 |
| --------- | -------------- | ----------------------------------- | ------ |
| activeKey | 当前选中项     | `string`                            | -      |
| items     | 菜单项         | `{ key: string; tab: ReactNode }[]` | -      |
| onChange  | 切换菜单的回调 | `(activeKey)=>void`                 | -      |

#### TableDropdown

| 参数           | 说明                                                                  | 类型        | 默认值 |
| -------------- | --------------------------------------------------------------------- | ----------- | ------ |
| key            | 唯一标志                                                              | `string`    | -      |
| name           | 内容                                                                  | `ReactNode` | -      |
| (...Menu.Item) | antd 的 [Menu.Item](https://ant.design/components/menu-cn/#Menu.Item) | Menu.Item   | -      |
