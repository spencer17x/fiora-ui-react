import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { isFunction, isNumber, isString } from '../../utils';
import Icon from '../icon';
import './index.scss';

type MessageWindowType = 'info' | 'success' | 'error' | 'warning';

interface MessageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	content?: string;
	type: MessageWindowType;
	duration: number;
	onClose: (event?: Event) => void;
}

interface MessageFunction {
	(content: string, duration?: number | Function, callback?: (event?: Event) => void): void;
}

interface Message {
	info: MessageFunction;
	success: MessageFunction;
	error: MessageFunction;
	warning: MessageFunction;
}

export const MessageWrapper: React.FC<MessageWrapperProps> = props => {
	const { children, type, duration, onClose } = props;
	const messageWrapper = useRef(null);
	const handleAnimationEnd = (event: any) => {
		event.target.parentNode.remove();
		onClose(event);
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

const createMessageWindow = (
	content: string, type: MessageWindowType, duration?: number | Function, callback?: () => void
) => {
	const messageContainer = document.querySelector('.f-message-container');
	const div = document.createElement('div');
	const onClose = isFunction(duration) ? duration :
		callback ? callback : () => {};
	ReactDOM.render(
		<MessageWrapper
			onClose={onClose}
			type={type}
			duration={isNumber(duration) ? duration : 3}
		>{content}</MessageWrapper>,
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

export const message: Message = {
	info(content, duration, callback) {
		createMessageWindow(content, 'info', duration, callback);
	},
	success(content, duration, callback) {
		createMessageWindow(content, 'success', duration, callback);
	},
	error(content, duration, callback) {
		createMessageWindow(content, 'error', duration, callback);
	},
	warning(content, duration, callback) {
		createMessageWindow(content, 'warning', duration, callback);
	}
};
