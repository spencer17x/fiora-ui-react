import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { isNumber, isPlainObject, isArray } from '../../utils';
import { ColProps } from './col';
import './row.scss';

export interface GutterObject {
	xs: number;
	sm: number;
	md: number;
	lg: number;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
	gutter?: number | GutterObject | (GutterObject | number)[];
	justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
	align?: 'top' | 'middle' | 'bottom';
}

const prefixCls = 'f-row';

/**
 * 拼接class
 * @param prefixClass
 * @param gutter
 */
export const combineGutterClasses = (
	prefixClass: string,
	gutter: RowProps['gutter']
): string => {
	if (isNumber(gutter)) return `${prefixClass}-${gutter}`;
	if (isPlainObject<GutterObject>(gutter)) {
		return Object.keys(gutter)
		.map((gutterKey: keyof GutterObject) => {
			return `${prefixClass}-${gutterKey}-${gutter[gutterKey]}`;
		})
		.join(' ');
	}
	return '';
};

const Row = (props: RowProps) => {
	const { children, className, gutter, justify, align, ...restProps } = props;
	return <div
		className={classNames(
			prefixCls,
			combineGutterClasses(`${prefixCls}-gutter`, gutter),
			isArray(gutter) &&
			combineGutterClasses(`${prefixCls}-gutter`, gutter[0]),
			{
				[`${prefixCls}-${justify}`]: justify,
				[`${prefixCls}-${align}`]: align
			},
			className
		)}
		{...restProps}
	>
		{
			isArray(children) ? React.Children.map(children, child => {
				if (React.isValidElement(child) && gutter) {
					return React.cloneElement<ColProps>(child, { gutter });
				}
				return child;
			}) : children
		}
	</div>;
};

Row.propTypes = {
	gutter: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({
			xs: PropTypes.number,
			sm: PropTypes.number,
			md: PropTypes.number,
			lg: PropTypes.number
		}),
		PropTypes.arrayOf(
			PropTypes.oneOfType(
				[
					PropTypes.number,
					PropTypes.shape({
						xs: PropTypes.number,
						sm: PropTypes.number,
						md: PropTypes.number,
						lg: PropTypes.number
					})
				]
			)
		)
	]),
	justify: PropTypes.oneOf([
		'start', 'center', 'end', 'space-between', 'space-around'
	]),
	align: PropTypes.oneOf([
		'top', 'middle', 'bottom'
	])
};

export default Row;
