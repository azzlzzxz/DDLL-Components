/*
 * @Author: xinxu
 * @Date: 2023-03-09 18:39:16
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-31 10:22:41
 * @FilePath: /ddll-components/packages/form/src/components/LoginForm/index.tsx
 */
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { message } from 'antd';
import React from 'react';
import { LoginData } from '../../typing';

const FXLoginForm = ({
  loginType,
  logo,
  title,
  bgColor,
  count = 60,
  onSubmit,
}: LoginData) => {
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: bgColor ? bgColor : '#f0f2f5' }}>
        <LoginForm
          logo={logo}
          title={title}
          subTitle={<div style={{ opacity: 0 }}>LoginForm</div>}
          // @ts-ignore
          onFinish={(e) => onSubmit(e)}
        >
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder="用户名"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder="手机号"
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                countDown={count}
                phoneName="mobile"
                name="code"
                placeholder="请输入验证码"
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async (phone) => {
                  if (phone) {
                    message.success(`手机号 ${phone} 验证码发送成功!`);
                  } else if (!phone) {
                    throw new Error('请先输入手机号');
                  } else if (!/^1\d{10}$/.test(phone)) {
                    throw new Error('请输入正确手机号');
                  }
                }}
              />
            </>
          )}
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default FXLoginForm;
