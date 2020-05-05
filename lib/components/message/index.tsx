import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { isString } from '../../utils';
import Icon from '../icon';
import './index.scss';

type MessageWindowType = 'info' | 'success' | 'error' | 'warning';

interface MessageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	content?: string;
	type: MessageWindowType;
}

interface Message {
	(): void;

	info: (content: string) => void;
	success: (content: string) => void;
	error: (content: string) => void;
	warning: (content: string) => void;
}

export const message: Message = () => {
	console.log('message');
};

export const MessageWrapper: React.FC<MessageWrapperProps> = props => {
	const { children, type } = props;
	const messageWrapper = useRef(null);
	const handleAnimationEnd = (event: any) => {
		event.target.parentNode.remove();
	};
	return <div ref={messageWrapper} className='f-message-wrapper' onAnimationEnd={handleAnimationEnd}>
		{type === 'info' && <Icon type='info' fill='#1890ff' />}
		{type === 'success' && <Icon type='selected' fill='#52C41A' />}
		{type === 'error' && <Icon type='close' fill='#FF4D4F' />}
		{type === 'warning' && <Icon type='info' fill='#FAAD14' />}
		{isString(children) ? <span>{children}</span> : children}
	</div>;
};

const createMessageWindow = (content: string, type: MessageWindowType) => {
	const messageContainer = document.querySelector('.f-message-container');
	const div = document.createElement('div');
	document.body.append(div);
	ReactDOM.render(
		<MessageWrapper type={type}>{content}</MessageWrapper>,
		div
	);
	if (messageContainer) {
		messageContainer.append(div);
	} else {
		const messageContainerDom = document.createElement('div');
		messageContainerDom.className = 'f-message-container';
		document.body.append(messageContainerDom);
		messageContainerDom.append(div);
	}
};

message.info = (content: string) => {
	createMessageWindow(content, 'info');
};

message.success = (content: string) => {
	createMessageWindow(content, 'success');
};

message.error = (content: string) => {
	createMessageWindow(content, 'error');
};

message.warning = (content: string) => {
	createMessageWindow(content, 'warning');
};
