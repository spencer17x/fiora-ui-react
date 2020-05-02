import React  from 'react';
import PropTypes from 'prop-types';
import { isArray } from '../../utils';
import { StepItemProps } from './step-item';
import './steps.scss';

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
	current?: number;
}

const prefixCls = 'f-steps';

const Steps: React.FC<StepsProps> = props => {
	const { children, current = 0, ...restProps } = props;
	return <div className={prefixCls} {...restProps}>
		{
			isArray(children) ? React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return React.cloneElement<StepItemProps>(child, {
						index,
						isLast: index === children.length - 1,
						active: index === current,
						passed: index < current,
						inactivated: index > current
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
