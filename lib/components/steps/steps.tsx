import React from 'react';
import PropTypes from 'prop-types';
import { isArray } from '../../utils';
import { Direction, StepItemProps } from './step-item';
import classNames from 'classnames';
import './steps.scss';

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
	current?: number;
	direction?: Direction;
}

const prefixCls = 'f-steps';

const Steps: React.FC<StepsProps> = props => {
	const { children, current = 0, direction, ...restProps } = props;
	return <div className={classNames(prefixCls, {
		[`${prefixCls}-${direction}`]: direction
	})} {...restProps}>
		{
			isArray(children) ? React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return React.cloneElement<StepItemProps>(child, {
						index,
						isLast: index === children.length - 1,
						active: index === current,
						finished: index < current,
						waiting: index > current,
						direction
					});
				}
				return child;
			}) : children
		}
	</div>;
};

Steps.propTypes = {
	current: PropTypes.number
};

Steps.defaultProps = {
	current: 0
};

export default Steps;
