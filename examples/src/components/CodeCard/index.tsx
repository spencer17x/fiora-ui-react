import React, { ReactNode, ReactNodeArray, useState } from 'react';
import classNames from 'classnames';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../../../../lib';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/jsx/jsx';
import './index.scss';

interface CodeShowProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	children?: ReactNodeArray | ReactNode;
	className?: string;
	code?: string;
}

const CodeShow: React.FC<CodeShowProps> = ({
	children,
	title,
	className,
	code,
	...restProps
}) => {
	const [showCard, setShowCard] = useState(false);
	return <div className={classNames('code-card', className)} {...restProps}>
		<h1>{title}</h1>
		<div className='code-card_demo'>
			{children}
		</div>
		<Icon className='icon-code-toggle' type='code' onClick={() => setShowCard(!showCard)} />
		<CSSTransition
			in={showCard}
			timeout={300}
			classNames="code"
			unmountOnExit
		>
			<CodeMirror
				className='code-mirror_container'
				value={code}
				options={{
					mode: 'jsx',
					theme: 'dracula',
					lineNumbers: true,
					readOnly: true,
					tabSize: 2
				}}
				onChange={(editor, data, value) => {
					console.log(value);
				}}
			/>
		</CSSTransition>
	</div>;
};

export default CodeShow;
