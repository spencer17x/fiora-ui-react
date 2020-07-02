import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import { validate } from '../../utils';
import './index.scss';

export interface FormItem {
  label: string;
  name: string;
  type: string;
  value: string;
  rules?: Array<{[K: string]: string | boolean | number}>
}

export interface FormProps {
  data: Array<FormItem>;
  onSubmit: () => void;
  onChange: (data: FormProps['data']) => void;
}

const prefixCls = 'f-form';

const Form: React.FC<FormProps> = props => {
  const { data, onSubmit, onChange, ...restProps } = props;
  return <form onSubmit={onSubmit} className={prefixCls}>
    {
      data.map(formItem => {
        return <label className={`${prefixCls}-item`} key={formItem.name}>
          <span className={`${prefixCls}-item--label`}>{formItem.label}</span>
          <Input
            type={formItem.type}
            value={formItem.value}
            onChange={event => {
              const formItemData = data.find(item => item.name === formItem.name);
              const updatedFormItemData = Object.assign({}, formItemData, {
                value: event.target.value
              });
              const updatedData = data.map(item => {
                if (formItem.name === item.name) return updatedFormItemData;
                return item;
              });
              validate(updatedData);
              onChange(updatedData);
            }}
          />
        </label>;
      })
    }
  </form>;
};

Form.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;