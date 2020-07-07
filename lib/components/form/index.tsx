import React, { ReactElement } from 'react';
import Input from '../input';
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
  buttons?: Array<ReactElement>;
  rules?: Array<Rule>;
  errors?: {[k: string]: Array<string>;}
}

const Form: React.FC<FormProps> = props => {
  const { data, buttons, fields, onChange, errors, ...restProps } = props;
  const onInputChange = (name: keyof FormProps['data'], event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...data,
      [name]: event.target.value
    });
  };
  return <form className='f-form'>
    <div className='f-form-fields'>
      {
        fields.map(field => {
          return <label key={field.name} className='f-form-item'>
            <div className='f-form-item--label'>{field.label}</div>
            <div className='f-form-item--content'>
              <Input
                onChange={event => onInputChange(field.name, event)}
                type={field.type}
              />
              <div className='f-form-item--error'>
                {
                  errors && errors[field.name].map((error, index) => {
                    return <span key={index} className='error-item'>{error}</span>;
                  })
                }
              </div>
            </div>
          </label>;
        })
      }
    </div>
    <div className='f-form-item'>
      <div className='f-form-item--label'></div>
      <div className='f-form-item--content'>
        {
          buttons && buttons.map((button, index) => {
            return React.cloneElement(button, {
              key: index
            });
          })
        }
      </div>
    </div>
  </form>;
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
  return errors;
};

export default Form;
