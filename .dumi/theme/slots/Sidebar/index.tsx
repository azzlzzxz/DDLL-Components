/*
 * @Author: xinxu
 * @Date: 2023-02-13 21:04:57
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-14 09:55:40
 * @FilePath: /ddll-components/.dumi/theme/slots/Sidebar/index.tsx
 */
import { NavLink, useLocation } from 'dumi';
import isEqual from 'fast-deep-equal';
import React, { memo, type FC } from 'react';

import { useSiteStore } from '../../store/useSiteStore';
import { useStyles } from './style';

const Sidebar: FC = () => {
  const sidebar = useSiteStore((s) => s.sidebar, isEqual);
  const { styles } = useStyles();

  const location = useLocation();

  if (location.pathname.includes('changelog')) {
    return null;
  }
  return (
    sidebar && (
      <div className={styles.sidebar}>
        {sidebar.map((item, i) => (
          <dl key={String(i)}>
            {item.title && <dt>{item.title}</dt>}
            {item.children.map((child) => (
              <dd key={child.link}>
                <NavLink to={child.link} title={child.title} end>
                  {child.title}
                </NavLink>
              </dd>
            ))}
          </dl>
        ))}
      </div>
    )
  );
};

export default memo(Sidebar);
