import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const buttonPrefixCls: string = 'f-btn';

interface ButtonProps {
	className?: string;
	type?: 'primary';
	children?: string;
}

const Button: React.FC<ButtonProps> = ({
	className,
	type,
	children,
	...restProps
}) => {
	const classes = classNames(buttonPrefixCls, className, {
		[`${buttonPrefixCls}-${type}`]: type
	});
	return <button className={classes} {...restProps}>
		{children}
	</button>;
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(['primary']),
	children: PropTypes.string
};

Button.defaultProps = {
	type: 'primary'
};

export default Button;
