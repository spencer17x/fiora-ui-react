import React from 'react';
import classNames from 'classnames';
import { BaseBreadcrumbProps } from './breadcrumb';
import './breadcrumb-separator.scss';

const prefixCls = 'f-breadcrumb-separator';

const BreadcrumbSeparator: React.FC<BaseBreadcrumbProps> = props => {
	const { children, className, ...restProps } = props;
	return <span className={classNames(prefixCls, className)} {...restProps}>
		{children}
	</span>;
};

BreadcrumbSeparator.propTypes = {};

BreadcrumbSeparator.defaultProps = {
	children: '/'
};

export default BreadcrumbSeparator;
