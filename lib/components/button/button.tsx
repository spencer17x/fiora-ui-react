import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { tuple } from '../../_util/type';
import Icon from '../icon';
import ButtonGroup, { ButtonGroupProps } from './button-group';
import './button.scss';

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'danger',
  'link'
);
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type SizeType = 'small' | 'default' | 'large';

export type Shape = 'circle';

export interface BaseButtonProps {
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  shape?: Shape;
}

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>;

const buttonPrefixCls: string = 'f-btn';

const Button: React.FC<ButtonProps> & {
  Group: React.FC<ButtonGroupProps>
} = props => {
  const {
    className, type, children, size,
    htmlType, disabled, icon, loading,
    shape, ...restProps
  } = props;
  const classes: string = classNames(buttonPrefixCls, className, {
    [`${buttonPrefixCls}-${type}`]: type,
    [`${buttonPrefixCls}-${size}`]: size,
    [`${buttonPrefixCls}-disabled`]: disabled,
    [`${buttonPrefixCls}-loading`]: loading,
    [`${buttonPrefixCls}-ripple`]: !disabled,
    [`${buttonPrefixCls}-${shape}`]: shape,
    [`${buttonPrefixCls}-between`]: (icon || loading) && children
  });
  return (
    <button
      disabled={disabled}
      type={htmlType}
      className={classes}
      {...restProps}
    >
      {icon && <Icon type={icon}/>}
      {
        loading && (
          <Icon
            type="loading"
            spin={true}
            fill="#1890ff"
            interval={1200}
            className={`${buttonPrefixCls}-loading`}
          />
        )
      }
      {
        children &&
        React.Children.map(children, childNode => {
          if (typeof childNode === 'string') return <span>{childNode}</span>;
          return childNode;
        })
      }
    </button>
  );
};

Button.Group = ButtonGroup;

Button.defaultProps = {
  type: 'default',
  htmlType: 'button',
  disabled: false,
  loading: false
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(ButtonTypes),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default Button;
