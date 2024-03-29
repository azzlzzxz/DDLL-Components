/*
 * @Author: xinxu
 * @Date: 2023-03-15 14:22:01
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-23 11:02:40
 * @FilePath: /fx-components/.dumi/theme/slots/Logo/index.tsx
 */
import { Link, useLocale } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, type FC } from 'react';

import { useSiteStore } from '../../store/useSiteStore';

import { useStyles } from './style';

const Logo: FC = () => {
  const locale = useLocale();
  const themeConfig = useSiteStore((s) => s.siteData.themeConfig, isEqual);
  const { styles, cx } = useStyles();

  return (
    themeConfig && (
      <Link className={cx(styles)} to={'base' in locale ? locale.base : '/'}>
        <img src={themeConfig.logo as string} alt={themeConfig.name} />
        {themeConfig.name}
      </Link>
    )
  );
};

export default memo(Logo);
