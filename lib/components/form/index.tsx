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
}

export interface FormProps {
  data: {[k: string]: string | number};
  fields: Array<Field>;
  onChange: (data: FormProps['data']) => void;
  buttons?: Array<ReactElement>;
  rules?: Array<Rule>;
}

const Form: React.FC<FormProps> = props => {
  const { data, buttons, fields, onChange, ...restProps } = props;
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
              {/*<div className='f-form-item--error'>错误</div>*/}
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

export default Form;
