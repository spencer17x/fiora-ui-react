import React, { CSSProperties, ReactNode } from 'react';
import Input from '../input';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import './index.scss';

type FieldType = 'text' | 'password';

interface Field {
  name: string;
  type?: FieldType;
  label?: string;
}

export interface Rule {
  name: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  message: string;
}

export interface FormProps {
  data: {[k: string]: string};
  fields: Array<Field>;
  onChange: (data: FormProps['data']) => void;
  rules?: Array<Rule>;
  errors?: {[k: string]: Array<string>;}
  layout?: 'horizontal' | 'vertical' | 'inline';
  children?: ReactNode;
  style?: CSSProperties;
}

const Form: React.FC<FormProps> = props => {
  const { data, fields, onChange, errors, children, layout, rules, ...restProps } = props;
  const onInputChange = (name: keyof FormProps['data'], event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...data,
      [name]: event.target.value
    });
  };
  return <form className='f-form' {...restProps}>
    <div className={classNames('f-form-fields', {
      [`f-form-fields--${layout}`]: layout
    })}>
      {
        fields.map(field => {
          return <label key={field.name} className={classNames('f-form-item', {
            [`f-form-item--${layout}`]: layout
          })}>
            <div className='f-form-item--label'>{field.label}</div>
            <div className='f-form-item--content'>
              <Input
                value={data[field.name]}
                onChange={event => onInputChange(field.name, event)}
                type={field.type}
              />
              {
                <div className='f-form-item--error'>
                  <TransitionGroup>
                    {
                      errors && errors[field.name] && errors[field.name].map((error, index) => {
                        return <CSSTransition
                          in={Boolean(errors)}
                          timeout={300}
                          classNames="error"
                          unmountOnExit
                          key={index}
                        >
                          <span key={index} className='error-item'>{error}</span>
                        </CSSTransition>;
                      })
                    }
                  </TransitionGroup>
                </div>
              }
            </div>
          </label>;
        })
      }
    </div>
    <div className='f-form-item'>
      <div className='f-form-item--label'></div>
      <div className='f-form-item--content'>{children}</div>
    </div>
  </form>;
};

/**
 * 判断是否有错误
 * @param errors
 */
const noError = (errors: FormProps['errors'] = {}): boolean => {
  return Object.keys(errors).filter(errorKey => errors[errorKey].length > 0).length <= 0;
};

/**
 * 表单校验
 * @param formData
 * @param rules
 */
export const validate = (formData: FormProps['data'], rules: FormProps['rules']): FormProps['errors'] => {
  const errors: FormProps['errors'] = {};
  if (rules) {
    rules.map(rule => {
      const curVal = formData[rule.name];
      errors[rule.name] = errors[rule.name] || [];
      if (rule.required && !curVal) {
        errors[rule.name].push(rule.message);
      }
      if (rule.minlength !== undefined && curVal.length < rule.minlength) {
        errors[rule.name].push(rule.message);
      }
      if (rule.maxlength !== undefined && curVal.length > rule.maxlength) {
        errors[rule.name].push(rule.message);
      }
    });
  }
  if (noError(errors)) return;
  return errors;
};

export default Form;
