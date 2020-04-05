import React  from 'react';
import classNames from 'classnames';
import { isArray } from '../../utils';
import PropTypes from 'prop-types';
import BreadcrumbItem from './breadcrumb-item';
import BreadcrumbSeparator from './breadcrumb-separator';
import './breadcrumb.scss';

const prefixCls = 'f-breadcrumb';

export interface BaseBreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {

}

type BreadcrumbProps = BaseBreadcrumbProps & { separator?: string; }

const Breadcrumb: React.FC<BreadcrumbProps> = props => {
	const { children, separator, ...restProps } = props;
	return <div className={classNames(prefixCls, classNames)} {...restProps}>
		{
			isArray(children) ? React.Children.map(children, (child, index) => {
				const nextChild = children[index + 1];
				if (
					index < children.length - 1 &&
					React.isValidElement(child) &&
					child.type === BreadcrumbItem &&
					React.isValidElement(nextChild) &&
					nextChild.type !== BreadcrumbSeparator
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
