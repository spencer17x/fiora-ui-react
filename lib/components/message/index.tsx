import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { isString } from '../../utils';
import Icon from '../icon';
import './index.scss';

type MessageWindowType = 'info' | 'success' | 'error' | 'warning';

interface MessageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	content?: string;
	type: MessageWindowType;
	duration: number;
}

interface Message {
	(): void;

	info: (content: string, duration?: number) => void;
	success: (content: string, duration?: number) => void;
	error: (content: string, duration?: number) => void;
	warning: (content: string, duration?: number) => void;
}

export const message: Message = () => {
	console.log('message');
};

export const MessageWrapper: React.FC<MessageWrapperProps> = props => {
	const { children, type, duration } = props;
	const messageWrapper = useRef(null);
	const handleAnimationEnd = (event: any) => {
		event.target.parentNode.remove();
	};
	return <div ref={messageWrapper} style={{
		animationDuration: `${duration}s`
	}} className='f-message-wrapper' onAnimationEnd={handleAnimationEnd}>
		{type === 'info' && <Icon type='info' fill='#1890ff' />}
		{type === 'success' && <Icon type='selected' fill='#52C41A' />}
		{type === 'error' && <Icon type='close' fill='#FF4D4F' />}
		{type === 'warning' && <Icon type='info' fill='#FAAD14' />}
		{isString(children) ? <span>{children}</span> : children}
	</div>;
};

const createMessageWindow = (content: string, type: MessageWindowType, duration: number) => {
	const messageContainer = document.querySelector('.f-message-container');
	const div = document.createElement('div');
	document.body.append(div);
	ReactDOM.render(
		<MessageWrapper type={type} duration={duration}>{content}</MessageWrapper>,
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

message.info = (content: string, duration: number = 3) => {
	createMessageWindow(content, 'info', duration);
};

message.success = (content: string, duration: number = 3) => {
	createMessageWindow(content, 'success', duration);
};

message.error = (content: string, duration: number = 3) => {
	createMessageWindow(content, 'error', duration);
};

message.warning = (content: string, duration: number = 3) => {
	createMessageWindow(content, 'warning', duration);
};
