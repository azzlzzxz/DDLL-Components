/*
 * @Author: xinxu
 * @Date: 2023-02-13 21:04:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-13 22:21:19
 * @FilePath: /ddll-components/.dumi/theme/pages/Home/index.tsx
 */
import { memo, type FC } from 'react';

//@ts-ignore
import Features from 'dumi/theme/slots/Features';
//@ts-ignore
import Footer from 'dumi/theme/slots/Footer';
//@ts-ignore
import Header from 'dumi/theme/slots/Header';
//@ts-ignore
import Hero from 'dumi/theme/slots/Hero';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

const Home: FC = memo(() => (
  <>
    <Flexbox align={'center'} gap={80}>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </Flexbox>
  </>
));

export default Home;
