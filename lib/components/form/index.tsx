import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import './index.scss';

export interface RuleItem {
  message: string;

  [K: string]: string | boolean | number;
}

export interface Errors {
  [K: string]: Array<string>
}

export interface FormItem {
  label: string;
  name: string;
  type: string;
  value: string;
  rules?: Array<RuleItem>;
}

export interface FormProps {
  data: Array<FormItem>;
  errors?: Errors | null;
  buttons?: Array<ReactElement>;
  onChange: (data: FormProps['data']) => void;
}

const prefixCls = 'f-form';

const Form: React.FC<FormProps> = props => {
  const { data, onChange, buttons, errors, ...restProps } = props;
  return <form {...restProps} className={prefixCls}>
    {
      data.map(formItem => {
        return <div key={formItem.name} className={`${prefixCls}-item`}>
          <div className={`${prefixCls}-item--section`}>
            <label htmlFor={formItem.name} className={`${prefixCls}-item--label`}>{formItem.label}</label>
            <div className={`${prefixCls}-item--input`}>
              <Input
                id={formItem.name}
                name={formItem.name}
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
                  onChange(updatedData);
                }}
              />
              {
                <div className={`${prefixCls}-item--error`}>
                  {
                    errors && errors[formItem.name].map((error, index) => {
                      return <span
                        key={index}
                        className={`${prefixCls}-item--error-item`}
                      >{error}</span>;
                    })
                  }
                </div>
              }
            </div>
          </div>
        </div>;
      })
    }
    <div className={`${prefixCls}-buttons`}>
      {
        buttons && buttons.map((button, index) => {
          return React.cloneElement(button, {
            key: index
          });
        })
      }
    </div>
  </form>;
};

export const isNoError = (errors: Errors = {}) => {
  return Object.keys(errors).filter(error => errors[error].length > 0).length > 0 ? false : true;
};

export const validate = (data: FormProps['data']): Errors | null => {
  const errors: Errors = {};
  data.map(item => {
    const { rules, value, name } = item;
    if (rules) {
      rules.map(rule => {
        errors[name] = errors[name] || [];
        if (rule.isRequired && !value) errors[name].push(rule.message);
        if (rule.minlength !== undefined && value.length < rule.minlength) errors[name].push(rule.message);
        if (rule.maxlength !== undefined && value.length > rule.maxlength) errors[name].push(rule.message);
      });
    }
  });
  if (isNoError(errors)) return null;
  return errors;
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
  onChange: PropTypes.func.isRequired
};

export default Form;