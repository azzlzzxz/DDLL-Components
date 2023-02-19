/*
 * @Author: xinxu
 * @Date: 2023-02-13 21:04:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-13 22:22:29
 * @FilePath: /ddll-components/.dumi/theme/slots/Header/index.tsx
 */
import isEqual from 'fast-deep-equal';
import { useState, type FC } from 'react';
import { Flexbox } from 'react-layout-kit';

import LangSwitch from 'dumi/theme-default/slots/LangSwitch';

//@ts-ignore
import Logo from 'dumi/theme/slots/Logo';
//@ts-ignore
import Navbar from 'dumi/theme/slots/Navbar';
//@ts-ignore
import SearchBar from 'dumi/theme/slots/SearchBar';

import Burger from '../../components/Burger';
import ThemeSwitch from '../../components/ThemeSwitch';

import { useResponsive } from 'antd-style';
import React from 'react';
import { useSiteStore } from '../../store/useSiteStore';
import { useStyle } from './style';

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const frontmatter = useSiteStore((s) => s.routeMeta.frontmatter, isEqual);

  const { mobile } = useResponsive();
  const { styles } = useStyle();

  return (
    frontmatter && (
      <div
        className={styles.header}
        data-static={Boolean(frontmatter.hero) || undefined}
        data-mobile-active={showMenu || undefined}
        onClick={() => setShowMenu(false)}
      >
        <Flexbox
          horizontal
          distribution={'space-between'}
          align={'center'}
          width={'auto'}
          className={styles.content}
        >
          {mobile ? (
            <>
              <Flexbox>
                <Burger />
              </Flexbox>
              <Flexbox horizontal className={styles.left}>
                <Logo />
              </Flexbox>
              <Flexbox>
                <ThemeSwitch />
              </Flexbox>
            </>
          ) : (
            <>
              <Flexbox horizontal className={styles.left}>
                <Logo />
              </Flexbox>
              <Flexbox style={{ marginLeft: 48, alignSelf: 'end' }}>
                <Navbar />
              </Flexbox>
              <section className={styles.right}>
                <div />
                <Flexbox
                  gap={16}
                  horizontal
                  align={'center'}
                  className="dumi-default-header-right-aside"
                >
                  <SearchBar />
                  <LangSwitch />
                  <ThemeSwitch />
                </Flexbox>
              </section>
            </>
          )}
        </Flexbox>
      </div>
    )
  );
};

export default Header;
