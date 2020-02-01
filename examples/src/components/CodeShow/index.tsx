import React, { ReactNode, ReactNodeArray } from 'react';
import classNames from 'classnames';
import './index.scss';

interface CodeShowProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	children?: ReactNodeArray | ReactNode;
	className?: string;
}

const CodeShow: React.FC<CodeShowProps> = ({
	children,
	title,
	className,
	...restProps
}) => {
	return <div className={classNames('code-show', className)} {...restProps}>
		<h1>{title}</h1>
		<div className='code-show_demo'>
			{children}
		</div>
	</div>;
};

export default CodeShow;
