import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { tuple } from '../../_util/type';
import './index.scss';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type SizeType = 'small' | 'default' | 'large';

export interface BaseButtonProps {
	type?: ButtonType;
	children?: React.ReactNode | string;
	size?: SizeType;
}

export type NativeButtonProps = {
	htmlType?: ButtonHTMLType;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>

const buttonPrefixCls: string = 'f-btn';

const Button: React.FC<ButtonProps> = ({
	className,
	type,
	children,
	size,
	htmlType,
	...restProps
}) => {
	const classes = classNames(buttonPrefixCls, className, {
		[`${buttonPrefixCls}-${type}`]: type,
		[`${buttonPrefixCls}-${size}`]: size,
	});
	return <button type={htmlType} className={classes} {...restProps}>
		{children}
	</button>;
};

Button.defaultProps = {
	type: 'default',
	htmlType: 'button',
	children: 'default'
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(ButtonTypes),
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.elementType
	]),
	size: PropTypes.oneOf([
		'small',
		'default',
		'large'
	])
};

export default Button;
