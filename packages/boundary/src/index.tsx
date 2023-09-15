/*
 * @Author: xinxu
 * @Date: 2023-03-14 21:08:47
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-22 14:30:17
 * @FilePath: /fx-components/packages/boundary/src/index.tsx
 */
import { Result } from 'antd';
import React, { Component } from 'react';
import { isIEMessage } from './utils/isIEMessage';

type ResultStatusType =
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 404
  | 403
  | 500;

type boundary = {
  children?: React.ReactNode;
  status?: ResultStatusType;
  title?: string;
  subTitle?: string;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  isIE?: boolean;
};

// 用于捕获渲染时错误的组件
class FXBoundary extends Component<boundary> {
  // 钩子
  static getDerivedStateFromError(error: unknown): unknown {
    return { error };
  }

  // 错误
  state = {
    error: null,
  };

  // 渲染
  render(): React.ReactNode {
    const {
      status = 'error',
      title = '抱歉，页面出错了!',
      subTitle,
      icon,
      isIE = true,
      extra,
      children,
    } = this.props;

    if (isIE) isIEMessage();

    if (this.state.error) {
      return (
        <Result
          status={status}
          icon={icon}
          title={title}
          subTitle={subTitle}
          extra={extra}
        ></Result>
      );
    }
    return children ? (
      children
    ) : (
      <Result
        status={status}
        icon={icon}
        title={title}
        subTitle={subTitle}
        extra={extra}
      />
    );
  }
}

export default FXBoundary;
