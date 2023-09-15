import React, { useState, useEffect, useMemo } from 'react';
import { Form, Row, Col, Space, Button } from 'antd';
import { FormProps, FormItemProps, FormInstance } from 'antd/es/form';
import { DownOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
// 使用ResizeObserver对单个元素进行大小监听，
// 针对某个元素实行大小、位置变化监听的API，是一个类，它提供了一个观察器，该观察器将在每个 resize 事件上调用。
import RcResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { isDayjs } from 'dayjs';
import './index.scss'


type FormConfigItem = Partial<FormItemProps> & {
  name: string;
  type: React.ComponentType;
  /**
   * 该控件占多少份
   */
  colSize?: number;
  /**
   * 配置
   */
  customProps?: any;
  [key: string]: any;
};

/**
 * 配置表单列变化的容器宽度断点
 */
const BREAKPOINTS = [
  [520, 1],
  [720, 2],
  [1200, 3],
  [Infinity, 4],
];

const getSpanConfig = (width: number, span?: number): number => {
  if (span && typeof span === 'number') {
    return span;
  }

  const breakPoint = BREAKPOINTS.find(item => width < item[0]);
  return 24 / breakPoint![1];
};

const DEFAULT_OMITS = [undefined, null, ''];
const objectToString = Object.prototype.toString;
const toTypeString = (value: unknown): string => objectToString.call(value);

const isPlainObject = (value: unknown): value is Record<any, any> => toTypeString(value) === '[object Object]';

const filterObject = (val: unknown, omits: any[] = DEFAULT_OMITS): any => {
  if (!isPlainObject(val) || isDayjs(val)) {
    return val;
  }
  return Object.keys(val as any).reduce((obj: any, key) => {
    const value = (val as any)[key];
    if (!omits.includes(value)) {
      obj[key] = isPlainObject(value) ? filterObject(value) : value;
    }
    return obj;
  }, {});
};

// 过滤器

interface FilterProps extends Omit<FormProps, 'layout' | 'children'> {
  config: FormConfigItem[];
  /**
   * label 宽度
   */
  labelWidth?: number | 'auto';
  /**
   * 默认显示的表单控件数量
   **/
  defaultColsNumber?: number;
  /**
   * 默认状态下是否折叠超出的表单项
   */
  defaultCollapsed?: boolean;
  /**
   * 表单项宽度
   */
  span?: number;
  /**
   * 表单实例
   */
  form?: FormInstance;
  /**
   * 提交表单时触发
   */
  onSubmit: (params: any) => void;

  /**
   * 重置表单时触发
   */
  onReset?: () => void;

  /**
   * 渲染按钮组件
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderButtons?: Function;

  /**
   * form标题
   */
  formTitle?: string;
  /**
   * collapse样式
   */
  collapseClassName?: string | undefined

}

const FXForm: React.FC<FilterProps> = ({
  config,
  initialValues,
  defaultColsNumber,
  defaultCollapsed = true,
  labelWidth = 100,
  span,
  className,
  form: userForm,
  onSubmit,
  onReset,
  renderButtons,
  formTitle,
  collapseClassName,
  ...restProps
}) => {

  const [collapse, collapseActions] = useBoolean(defaultCollapsed);

  const [width, setWidth] = useState(1024);

  const [defaultForm] = Form.useForm();
  const form = userForm || defaultForm;

  useEffect(() => {
    /**
     * 因为 setFieldsValue 采用合并更新，先调用 resetFields 重置
     * https://github.com/react-component/field-form/blob/6c016de9096fed9b8f1c0589bbf62f60dc46087f/src/utils/valueUtil.ts#L45
     **/
    form.resetFields()
    if(initialValues){
      form.setFieldsValue(initialValues)
    };
  }, [initialValues, form]);

  //每一个控件占多少栅格  一行为24栅格
  const spanSize = useMemo(() => getSpanConfig(width + 16, span), [width, span]);

  //显示的表单控件数量
  const showLength = useMemo(() => {
    if (defaultColsNumber) {
      return defaultColsNumber;
    }
    return Math.max(1, 24 / spanSize - 1);
  }, [defaultColsNumber, spanSize]);

  /**
   * 是否需要展示 collapse
   */
  const isShowCollapse = config.length - 1 >= showLength;

  /**
   * 点击搜索
   */
  const handleFilterSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(filterObject(values));
    } catch (error) {
      console.log('handleFilterSubmit', error);
    }
  };
  /**
   * 自定义按钮封装的值获得
   */
  const getFormValue = () => form.validateFields();

  /**
   * 点击重置
   */
  const handleFilterReset = () => {
    form.resetFields();
    onReset?.();
  };

  return (
    <RcResizeObserver
      key='resize-observer'
      onResize={offset => {
        if (width !== offset.width) {
          setWidth(offset.width);
        }
      }}>
      <div className={classNames('filter', className)}>
        {formTitle && <div className='ml-16 mt-8 mb-20 fs-18 bold'>{formTitle}</div>}
        <Form
          form={form}
          labelCol={{ flex: labelWidth === 'auto' ? labelWidth : `0 0 ${labelWidth}px` }}
          {...restProps}
          onFinish={handleFilterSubmit}>
          <Row>
            {config.map(({ type: Component, customProps, colSize, ...item }, index) => {
              const colSpan = Math.min(Math.ceil(spanSize * (colSize || 1)), 24);
              if (item.hidden || (collapse && index >= showLength)) {
                return (
                  <Form.Item
                    key={item.name || index}
                    {...item}
                    hidden={item.hidden || (collapse && index >= showLength)}>
                    <Component {...customProps} />
                  </Form.Item>
                );
              }
              return (
                <Col key={item.name || index} span={colSpan}>
                  <Form.Item {...item}>
                    <Component {...customProps} />
                  </Form.Item>
                </Col>
              );
            })}
            <Col span={spanSize} className={classNames('filter-collapse', collapseClassName)}>
              <Form.Item>
                <Space>
                  {renderButtons ? (
                    renderButtons(getFormValue, handleFilterReset)
                  ) : (
                    <>
                      <Button type='primary' htmlType='submit'>
                        搜索
                      </Button>
                      <Button onClick={handleFilterReset}>重置</Button>
                    </>
                  )}

                  {isShowCollapse && (
                    <span className='link pointer' onClick={() => collapseActions.toggle()}>
                      {collapse ? '展开' : '收起'}
                      <DownOutlined
                        style={{
                          marginLeft: '0.5em',
                          transition: '0.3s all',
                          transform: `rotate(${collapse ? 0 : 0.5}turn)`,
                        }}
                      />
                    </span>
                  )}
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </RcResizeObserver>
  );
};

export default FXForm;
