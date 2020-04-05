import React from 'react';
import classNames from 'classnames';
import { isArray } from '../../utils';
import PropTypes from 'prop-types';
import './breadcrumb.scss';

const prefixCls = 'f-breadcrumb';

export interface BaseBreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {

}

type BreadcrumbProps = BaseBreadcrumbProps & { separator?: string; }

const Breadcrumb = (props: BreadcrumbProps) => {
	const { children, separator, ...restProps } = props;
	return <div className={classNames(prefixCls, classNames)} {...restProps}>
		{
			isArray(children) ? React.Children.map(children, (child, index) => {
				if (
					index < children.length - 1 &&
					child.type.name === 'BreadcrumbItem' &&
					children[index + 1].type.name !== 'BreadcrumbSeparator'
				) {
					return <>
						{child}
						<span className={classNames(`${prefixCls}-separator`)}>{separator}</span>
					</>;
				}
				return child;
			}) : children
		}
	</div>;
};

Breadcrumb.propTypes = {
	separator: PropTypes.string
};

Breadcrumb.defaultProps = {
	separator: '/'
};

export default Breadcrumb;
