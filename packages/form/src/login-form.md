# FXLoginForm - 登陆表单

## 代码演示

### 密码登陆表单

<code src="./demos/LoginForm/account.tsx"  background="hsl(220,23%,97%)" title="密码登陆表单"></code>

### 验证码登陆表单

<code src="./demos/LoginForm/phone.tsx"  background="hsl(220,23%,97%)" title="验证码登陆表单"></code>

FXoginForm 代表了比较常见的居中布局样式。

| 参数      | 说明                                  | 类型                 | 默认值  |
| --------- | ------------------------------------- | -------------------- | ------- |
| loginType | 登陆表单类型，支持 phone 与 account   | `string`             | -       |
| logo      | logo 的配置，支持 ReactNode 和 string | `ReactNode \| url`   | -       |
| title     | 标题，可以配置为空                    | `ReactNode`          | -       |
| bgColor   | 背景颜色                              | `string`             | #f0f2f5 |
| count     | 倒计时的秒数                          | `number`             | 60      |
| onSubmit  | 提交回调函数                          | `(formData) => void` | -       |
