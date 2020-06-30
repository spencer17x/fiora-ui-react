import React  from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

type baseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

interface InputProps extends baseInputProps {
	size?: 'large' | 'middle' | 'small';

}

const prefixCls = 'f-input';

const Input: React.FC<InputProps> = props => {
	const { size, disabled, ...restProps } = props;
	return <input
    disabled={disabled}
		className={classNames(prefixCls, {
			[`${prefixCls}-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled
		})}
		{...restProps}
	/>;
};

Input.propTypes = {
	size: PropTypes.oneOf(['large', 'middle', 'small'])
};

export default Input;
