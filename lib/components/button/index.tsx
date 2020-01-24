import React  from 'react';
import classNames from 'classnames';
import './index.scss';

const buttonPrefixCls: string = 'f-btn';

interface ButtonProps {
	className?: string;
	type?: 'primary';
}

const Button: React.FC<ButtonProps> = ({
	className,
	type,
	...restProps
}) => {
	const classes = classNames(buttonPrefixCls, className, {
		[`${buttonPrefixCls}-${type}`]: type
	});
	return <div className={classes} {...restProps}>
		Button
	</div>;
};

export default Button;
