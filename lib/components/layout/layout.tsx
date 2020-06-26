import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Aside from './aside';
import './layout.scss';

interface LayoutProps extends BasicLayoutProps {
	children: ReactElement[] | ReactElement;
}

export interface BasicLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const layoutPrefixCls: string = 'f-layout';

export default function Layout(props: LayoutProps) {
	const { children, className, ...restProps } = props;
	const hasAside: boolean = children && 'length' in children ? children.some(el => {
		return el.type === Aside;
	}) : false;
	return (
		<div
			{...restProps}
			className={classNames(layoutPrefixCls, className, {
				[`${layoutPrefixCls}-has-aside`]: hasAside
			})}
		>
			{children}
		</div>
	);
}
