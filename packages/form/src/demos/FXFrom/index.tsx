
import React from 'react';
import { Input, Select, Form,DatePicker } from 'antd';
import dayjs from 'dayjs';
import { FXForm } from '@fx/form';

/** 今日开始时间 */
const START_TIME = dayjs('00:00:00', 'HH:mm:ss');
/** 今日结束时间 */
const END_TIME = dayjs('23:59:59', 'HH:mm:ss');

const groupNum = () => (
  <Input.Group compact style={{ display: 'flex' }}>
    <Form.Item noStyle name='startFollowGroupNo'>
      <Input style={{ flex: 1, textAlign: 'center' }} placeholder='开始跟团号' />
    </Form.Item>
    <Input
      style={{
        width: 30,
        borderLeft: 0,
        borderRight: 0,
        pointerEvents: 'none',
      }}
      placeholder='~'
      disabled
    />
    <Form.Item noStyle name='endFollowGroupNo'>
      <Input style={{ flex: 1, textAlign: 'center' }} placeholder='结束跟团号' />
    </Form.Item>
  </Input.Group>
);

const App: React.FC = () => {
  const [form] = Form.useForm();
  const groupList = [
    {
      value: '1',
      label: '团1',
    },
    {
      value: '2',
      label: '团2',
    },
    {
      value: '3',
      disabled: true,
      label: '团3',
    },

  ]

  //去除前后空格
  const normalizeTrim = (value: string): string => {
    const trimValue = value.trim();
    return trimValue;
  };

  // 搜索
  const handleSearch = () => {
    console.log('搜索');
  };

  // 重置
  const handleReset = () => {
    console.log('重置');
  };

  let filterConfig = [
    {
      type: Select,
      name: 'originalGroupIds',
      label: '团购标题',
      customProps: {
        placeholder: '请输入团购标题',
        showSearch: true,
        allowClear: true,
        showArrow: false,
        filterOption: false,
        labelInValue: true,
        notFoundContent: '暂无查询结果',
        options: groupList,
        mode: 'multiple',
      },
    },

    {
      type: groupNum,
      name: 'followGroupNo',
      label: '跟团号',
      normalize: normalizeTrim,
      customProps: {
        placeholder: '请输入跟团号',
        allowClear: true,
      },
    },
    {
      type: Input,
      name: 'aftersaleNo',
      label: '售后单号',
      normalize: normalizeTrim,
      customProps: {
        placeholder: '请输入售后单号',
        allowClear: true,
      },
    },


    {
      type: DatePicker.RangePicker,
      name: 'rangeTime',
      label: '支付时间',
      customProps: {
        showTime: {
          hideDisabledOptions: true,
          defaultValue: [START_TIME, END_TIME],
        },
        presets: {
          今天: [START_TIME, END_TIME],
          昨天: [START_TIME.subtract(1, 'days'), END_TIME.subtract(1, 'days')],
          近七天内: [START_TIME.subtract(7, 'days'), END_TIME],
          近一个月内: [START_TIME.subtract(1, 'month'), END_TIME],
          近三个月内: [START_TIME.subtract(3, 'month'), END_TIME],
        },
      },
    },
  ];

  return (
    <FXForm
      defaultCollapsed={true}
      labelWidth={110}
      defaultColsNumber={9}
      config={filterConfig}
      form={form}
      onSubmit={handleSearch}
      onReset={handleReset}
    />)
};

export default App;
