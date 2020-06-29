import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

type baseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

interface InputProps extends baseInputProps {
	size?: 'large' | 'middle' | 'small';
}

const prefixCls = 'f-input';

const Input: React.FC<InputProps> = props => {
	const { defaultValue, size, ...restProps } = props;
	const [inputValue, setInputValue] = useState(() => {
		return defaultValue || '';
	});
	return <input
		value={inputValue}
		className={classNames(prefixCls, {
			[`${prefixCls}-${size}`]: size
		})}
		onChange={event => setInputValue(event.target.value)}
		{...restProps}
	/>;
};

Input.propTypes = {
	size: PropTypes.oneOf(['large', 'middle', 'small'])
};

export default Input;
