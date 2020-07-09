import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import Input from '../input';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

type FieldType = 'text' | 'password';

interface Field {
  name: string;
  type: FieldType;
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
  buttons?: ReactElement[];
  className?: string;
}

const Form: React.FC<FormProps> = props => {
  const { data, buttons, fields, className, onChange, errors, children, layout, rules, ...restProps } = props;
  const onInputChange = (name: keyof FormProps['data'], event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...data,
      [name]: event.target.value
    });
  };
  return <form className='f-form' {...restProps}>
    <div className={classNames('f-form-fields', {
      [`f-form-fields--${layout}`]: layout
    }, className)}>
      {
        fields.map(field => {
          return <label key={field.name} className={classNames('f-form-item', {
            [`f-form-item--${layout}`]: layout
          })}>
            <div className='f-form-item--label'>{field.label}</div>
            <div className='f-form-item--content'>
              <Input
                error={Boolean(errors && errors[field.name] && errors[field.name].length)}
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
      <div className='f-form-item'>
        {
          layout === 'horizontal' && <div className='f-form-item--label'></div>
        }
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
    </div>
    {children}
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

Form.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.string.isRequired
  ).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf<FieldType>(['password', 'text']).isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
      minlength: PropTypes.number.isRequired,
      maxlength: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ),
  errors: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  ),
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  children: PropTypes.element,
  style: PropTypes.object,
  buttons: PropTypes.arrayOf(PropTypes.element.isRequired),
  className: PropTypes.string
};

Form.defaultProps = {
  layout: 'horizontal'
};

export default Form;
