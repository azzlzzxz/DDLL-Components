/*
 * @Author: xinxu
 * @Date: 2023-02-12 13:01:59
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-19 14:15:28
 * @FilePath: /DDLL-Components/.prettierrc.js
 */
module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ],
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
