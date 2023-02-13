/*
 * @Author: xinxu
 * @Date: 2023-02-12 16:26:22
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-12 16:27:51
 * @FilePath: /DDLL-Components/packages/button/src/demos/type.tsx
 */
import React from 'react';
import Button from '@ddll/button';

const Basic: React.FC<any> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div style={{ marginRight: '20px' }}>
        default: <Button>click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        primary: <Button type="primary">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        dashed: <Button type="dashed">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        link: <Button type="link">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        text: <Button type="text">click me</Button>
      </div>
    </div>
  );
};

export default Basic;
