import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import './step-item.scss';

export type Direction = 'horizontal' | 'vertical';

export interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	subTitle?: string;
	description?: string;
	index?: number;
	isLast?: boolean;
	active?: boolean;
	finished?: boolean;
	waiting?: boolean;
	direction?: Direction;
}

const prefixCls = 'f-step-item';

const StepItem: React.FC<StepItemProps> = props => {
	const {
		title, subTitle, description, direction,
		index = 0, isLast, finished, active, waiting, ...restProps
	} = props;
	return <div className={classNames(prefixCls, {
		[`${prefixCls}-${direction}`]: direction
	})} {...restProps}>
		<div className={`${prefixCls}-left`}>
			{
				finished ? <div className={`${prefixCls}-icon`}>
					<Icon type='selected' fill='#1890ff' />
				</div> : <div className={classNames(`${prefixCls}-icon`, {
					[`${prefixCls}-icon-finished`]: finished,
					[`${prefixCls}-icon-active`]: active,
					[`${prefixCls}-icon-waiting`]: waiting,
				})}>{index + 1}</div>
			}
			<div className={`${prefixCls}-content`}>
				<div className={`${prefixCls}-content-head`}>
					{title && <div className={classNames(`${prefixCls}-title`, {
						[`${prefixCls}-title-finished`]: finished,
						[`${prefixCls}-title-active`]: active,
						[`${prefixCls}-title-waiting`]: waiting,
					})}>{title}</div>}
					{subTitle && <div className={`${prefixCls}-sub-title`}>{subTitle}</div>}
				</div>
				{description && <div className={`${prefixCls}-description`}>{description}</div>}
			</div>
		</div>
		{
			!isLast && <div className={classNames(`${prefixCls}-line`, {
				[`${prefixCls}-line-blue`]: finished,
				[`${prefixCls}-line-${direction}`]: direction
			})}></div>
		}
	</div>;
};

StepItem.propTypes = {};

StepItem.defaultProps = {};

export default StepItem;
