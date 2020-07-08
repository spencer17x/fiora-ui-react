import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

type baseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

interface InputProps extends baseInputProps {
  size?: 'large' | 'middle' | 'small';
  error?: boolean;
}

const prefixCls = 'f-input';

const Input: React.FC<InputProps> = props => {
  const { size, disabled, className, error, ...restProps } = props;
  return <input
    disabled={disabled}
    className={classNames(prefixCls, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-error`]: error,
    })}
    {...restProps}
  />;
};

Input.propTypes = {
  size: PropTypes.oneOf(['large', 'middle', 'small'])
};

Input.defaultProps = {
  error: false
};

export default Input;
