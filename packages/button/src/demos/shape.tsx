/*
 * @Author: xinxu
 * @Date: 2023-02-12 16:26:22
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-12 16:28:01
 * @FilePath: /DDLL-Components/packages/button/src/demos/shape.tsx
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
        round: <Button size="middle">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        <Button size="middle" shape="circle">
          K
        </Button>
      </div>
    </div>
  );
};

export default Basic;
