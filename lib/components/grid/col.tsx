import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { combineGutterClasses, RowProps } from './row';
import { isArray } from '../../utils';
import './col.scss';

interface BaseColProps extends React.HTMLAttributes<HTMLDivElement> {
	span?: number;
	order?: number;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
}

export type ColProps = BaseColProps & Pick<RowProps, 'gutter'>;

const Col: React.FC<ColProps> = props => {
	const { children, className, span, gutter, order, xs, sm, md, lg, ...restProps } = props;
	return (
		<div
			{...restProps}
			className={classNames(
				'f-col',
				{
					[`f-col-span-${span}`]: span,
					[`f-col-span-xs-${xs}`]: xs,
					[`f-col-span-sm-${sm}`]: sm,
					[`f-col-span-md-${md}`]: md,
					[`f-col-span-lg-${lg}`]: lg,
					[`f-col-order-${order}`]: order,
				},
				combineGutterClasses('f-col-gutter', gutter),
				isArray(gutter) &&
				combineGutterClasses('f-col-gutter', gutter[0]),
				isArray(gutter) &&
				combineGutterClasses('f-col-gutter-vertical', gutter[1]),
				className
			)}
		>
			{children}
		</div>
	);
};

Col.propTypes = {
	span: PropTypes.number,
	order: PropTypes.number,
	xs: PropTypes.number,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number,
};

export default Col;
