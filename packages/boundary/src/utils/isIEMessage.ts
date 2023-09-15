/*
 * @Author: xinxu
 * @Date: 2023-03-14 21:09:19
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-14 21:09:30
 * @FilePath: /fx-components/packages/boundary/src/utils/isIEMessage.ts
 */

import { notification } from 'antd';

const LOCALSTORAGE_KEY = '__FX_IE_MESSAGE__';

let isMessage = false;

export function isIEMessage() {
  if (!isMessage) {
    isMessage = true;
    return;
  }

  const isIEMessage = localStorage.getItem(LOCALSTORAGE_KEY);

  if (isIEMessage) {
    return;
  }

  const UA = window.navigator.userAgent.toLowerCase();
  const isIE = /msie|trident/.test(UA);

  if (isIE) {
    notification.info({
      message: '温馨提示',
      description:
        '为了更好的使用体验，请切换浏览器内核为极速内核或者使用谷歌浏览器访问',
      duration: null,
      onClose() {
        localStorage.setItem(LOCALSTORAGE_KEY, LOCALSTORAGE_KEY);
      },
    });
  }
}
