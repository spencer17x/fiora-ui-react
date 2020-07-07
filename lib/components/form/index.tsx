import React from 'react';
import './index.scss';

interface Rule {
  required: boolean;
  message: string;
}

interface FormProps {

}

interface FormItemProps {
  name: string;
  label: string;
  rules: Array<Rule>
}

const Form: React.FC<FormProps> & {
  Item: React.FC<FormItemProps>
} = props => {
  const { children, ...restProps } = props;
  return <form {...restProps}>
    {children}
  </form>;
};

export const FormItem: React.FC<FormItemProps> = props => {
  const { children, label, rules, ...restProps } = props;
  return <div {...restProps}>
    <label className={'f-form-item--label'}>
      <span className='label-text'>{label}</span>
      <span className='label-value'>{children}</span>
    </label>
  </div>;
};

Form.Item = FormItem;

export default Form;
