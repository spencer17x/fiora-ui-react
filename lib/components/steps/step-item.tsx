import React from 'react';
import classNames from 'classnames';
import './step-item.scss';

export interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	subTitle?: string;
	description?: string;
	index?: number;
	isLast?: boolean;
	active?: boolean;
	passed?: boolean;
	inactivated?: boolean;
}

const prefixCls = 'f-step-item';

const StepItem: React.FC<StepItemProps> = props => {
	const { title, subTitle, description, index = 0, isLast, passed, active, inactivated, ...restProps } = props;
	return <div className={prefixCls} {...restProps}>
		<div className={classNames(`${prefixCls}-icon`, {
			[`${prefixCls}-icon-passed`]: passed,
			[`${prefixCls}-icon-active`]: active,
			[`${prefixCls}-icon-inactivated`]: inactivated,
		})}>{index + 1}</div>
		<div className={`${prefixCls}-content`}>
			<div className={`${prefixCls}-content-head`}>
				{title && <div className={classNames(`${prefixCls}-title`, {
					[`${prefixCls}-title-active`]: active,
					[`${prefixCls}-title-inactivated`]: inactivated,
				})}>{title}</div>}
				{subTitle && <div className={`${prefixCls}-sub-title`}>{subTitle}</div>}
			</div>
			{description && <div className={`${prefixCls}-description`}>{description}</div>}
		</div>
		{!isLast && <div className={classNames(`${prefixCls}-line`, {
			[`${prefixCls}-line-blue`]: passed
		})}></div>}
	</div>;
};

StepItem.propTypes = {};

StepItem.defaultProps = {};

export default StepItem;
