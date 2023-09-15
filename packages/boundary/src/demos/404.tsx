import FXBoundary from '@fx/boundary';
import { Button } from 'antd';
import React from 'react';

export default () => {
  return (
    <FXBoundary
      title=""
      subTitle="大事不妙啦！你访问的页面被弄丢了"
      icon={<img src="https://fx.dongdonglinli.com/img/error_404.png" />}
      extra={<Button type="primary">回到首页</Button>}
    />
  );
};
