/*
 * @Author: xinxu
 * @Date: 2023-02-13 21:04:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-13 22:15:16
 * @FilePath: /fx-components/.dumi/theme/layouts/DemoLayout/index.tsx
 */
import { useOutlet } from 'dumi';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import DemoProvider from '../../components/DemoProvider';

export default () => {
  const outlet = useOutlet();
  return (
    <DemoProvider>
      <LazyLoad offset={300} height={500}>
        {outlet}
      </LazyLoad>
    </DemoProvider>
  );
};
