import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { isString } from '../../utils';
import Icon from '../icon';
import './index.scss';

type MessageWindowType = 'info' | 'success' | 'error' | 'warning';

interface MessageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	msg?: string;
	type: MessageWindowType;
}

interface Message {
	(): void;

	info: (msg: string) => void;
	success: (msg: string) => void;
	error: (msg: string) => void;
	warning: (msg: string) => void;
}

export const message: Message = () => {
	console.log('message');
};

export const MessageWrapper: React.FC<MessageWrapperProps> = props => {
	const { children, type } = props;
	const messageWrapper = useRef(null);
	const handleAnimationEnd = (event: any) => {
		event.currentTarget.remove();
	};
	return <div ref={messageWrapper} className='f-message-wrapper' onAnimationEnd={handleAnimationEnd}>
		{type === 'info' && <Icon type='info' fill='#1890ff' />}
		{type === 'success' && <Icon type='selected' fill='#52C41A' />}
		{type === 'error' && <Icon type='close' fill='#FF4D4F' />}
		{type === 'warning' && <Icon type='info' fill='#FAAD14' />}
		{isString(children) ? <span>{children}</span> : children}
	</div>;
};

const createMessageWindow = (msg: string, type: MessageWindowType) => {
	const div = document.createElement('div');
	document.body.append(div);
	ReactDOM.render(
		<MessageWrapper type={type}>{msg}</MessageWrapper>,
		div
	);
};

message.info = (msg: string) => {
	createMessageWindow(msg, 'info');
};

message.success = (msg: string) => {
	createMessageWindow(msg, 'success');
};

message.error = (msg: string) => {
	createMessageWindow(msg, 'error');
};

message.warning = (msg: string) => {
	createMessageWindow(msg, 'warning');
};
