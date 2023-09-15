/*
 * @Author: xinxu
 * @Date: 2023-02-22 19:37:49
 * @LastEditors: xinxu
 * @LastEditTime: 2023-03-05 13:45:44
 * @FilePath: /fx-components/packages/table/src/index.tsx
 */
import { FieldIndexColumn, FieldStatus } from '@ant-design/pro-field';
import type { IntlType } from '@ant-design/pro-provider';
import {
  arEGIntl,
  caESIntl,
  ConfigConsumer,
  createIntl,
  enUSIntl,
  esESIntl,
  frFRIntl,
  itITIntl,
  jaJPIntl,
  msMYIntl,
  ptBRIntl,
  ruRUIntl,
  thTHIntl,
  viVNIntl,
  zhCNIntl,
  zhTWIntl,
} from '@ant-design/pro-provider';
import type {
  ProFieldValueType,
  RowEditableConfig,
} from '@ant-design/pro-utils';
import TableDropdown from './components/Dropdown';
import Search from './components/Form';
import type { ListToolBarProps } from './components/ListToolBar';
import ListToolBar from './components/ListToolBar';
import type { ColumnsState } from './Store/Provide';
import FXTable from './Table';
import type {
  ActionType,
  FXColumns,
  FXColumnType,
  FXTableProps,
  RequestData,
} from './typing';

type FXColumnsValueType = ProFieldValueType;
type TableRowEditable<T> = RowEditableConfig<T>;

export type {
  FXTableProps,
  IntlType,
  ActionType,
  TableRowEditable,
  ColumnsState,
  FXColumnsValueType,
  FXColumns,
  FXColumnType,
  RequestData,
  ListToolBarProps,
};
export {
  TableDropdown,
  ListToolBar,
  FieldStatus as TableStatus,
  Search,
  ConfigConsumer as IntlConsumer,
  ConfigConsumer,
  zhCNIntl,
  FieldIndexColumn as IndexColumn,
  createIntl,
  arEGIntl,
  enUSIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  caESIntl,
  ruRUIntl,
  msMYIntl,
  zhTWIntl,
  frFRIntl,
  ptBRIntl,
  thTHIntl,
  FXTable,
};

export default FXTable;
