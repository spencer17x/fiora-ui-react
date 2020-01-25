import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { tuple } from '../../_util/type';
import './index.scss';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
	type?: ButtonType;
	children?: React.ReactNode;
}

export type NativeButtonProps = {
	htmlType?: ButtonHTMLType;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>

const buttonPrefixCls: string = 'f-btn';

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
	type: PropTypes.oneOf(ButtonTypes),
	children: PropTypes.elementType
};

Button.defaultProps = {
	type: 'default'
};

export default Button;
