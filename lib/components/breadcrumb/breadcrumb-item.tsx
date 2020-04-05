import React  from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BaseBreadcrumbProps } from './breadcrumb';
import './breadcrumb-item.scss';

const prefixCls = 'f-breadcrumb-item';

type BreadcrumbItemProps = BaseBreadcrumbProps & { href?: string; }

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = props => {
	const { children, className, href, ...restProps } = props;
	return <div className={classNames(prefixCls, className)} {...restProps}>
		{
			href === undefined ?
				children :
				<Link to={href} className={`${prefixCls}-link`}>{children}</Link>
		}
	</div>;
};

BreadcrumbItem.propTypes = {
	href: PropTypes.string
};

export default BreadcrumbItem;
