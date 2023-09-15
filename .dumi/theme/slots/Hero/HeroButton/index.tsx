/*
 * @Author: xinxu
 * @Date: 2023-02-13 21:04:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-13 22:17:53
 * @FilePath: /fx-components/.dumi/theme/slots/Hero/HeroButton/index.tsx
 */
import { Button } from 'antd';
import React, { FC, ReactNode } from 'react';
import { useStyles } from './style';

interface HeroButtonProps {
  children: ReactNode;
}
const HeroButton: FC<HeroButtonProps> = ({ children }) => {
  const { styles } = useStyles();
  return (
    <Button
      size={'large'}
      shape={'round'}
      type={'primary'}
      className={styles.button}
    >
      {children}
    </Button>
  );
};

export default HeroButton;
