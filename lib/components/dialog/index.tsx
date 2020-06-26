import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { Button } from '../button';
import './index.scss';

interface DialogProps {
	visible: boolean;
	showClose?: boolean;
	title?: string;
	buttons?: Array<ReactElement>;
	className?: string;
	onClose?: () => void;
	maskClosable?: boolean;
	mask?: boolean;
}

type AlertOptions = Omit<DialogProps, 'visible'> & {
	content?: string
}

type CloseAction = 'cancel' | 'confirm'

const prefixCls = 'f-dialog';

const Dialog: React.FC<DialogProps> & {
	alert: (options: AlertOptions) => Promise<CloseAction>;
	confirm: (options: AlertOptions) => Promise<CloseAction>;
	prompt: (options: AlertOptions) => Promise<{ action: CloseAction, value?: string }>;
} = props => {
	const {
		children, showClose, visible,
		title, className, buttons,
		onClose, maskClosable, mask,
		...restProps
	} = props;
	return ReactDOM.createPortal(
		<Fragment>
			{
				visible && mask ? <div
					className={`${prefixCls}-mask`}
					onClick={() => maskClosable && onClose && onClose()}
				></div> : null
			}
			<CSSTransition
				in={visible}
				unmountOnExit
				timeout={200}
				classNames={prefixCls}
			>
				<div className={classNames(prefixCls, className)} {...restProps}>
					{showClose && <Icon onClick={onClose} type='close' className={`${prefixCls}-close`} />}
					{title && <header>{title}</header>}
					{children && <main className={`${prefixCls}-main`}>{children}</main>}
					{
						buttons && buttons.length && <footer className={`${prefixCls}-footer`}>
							{
								buttons.map((cmp, index) => {
									return React.cloneElement(cmp, {
										key: index,
										className: `${prefixCls}-footer--button`
									});
								})
							}
						</footer>
					}
				</div>
			</CSSTransition>
		</Fragment>, document.body
	);
};

Dialog.alert = options => {
	return new Promise(resolve => {
		const { title, content } = options;
		const div = document.createElement('div');
		const onClose = (action: CloseAction) => {
			ReactDOM.render(<div></div>, div);
			ReactDOM.unmountComponentAtNode(div);
			div.remove();
			resolve(action);
		};
		const Component = <Dialog
			title={title}
			visible={true}
			onClose={() => onClose('cancel')}
			buttons={
				[
					<Button
						onClick={() => onClose('confirm')}
						type='primary'
						style={{marginRight: 0}}
					>确 认</Button>
				]
			}
		>{content}</Dialog>;
		ReactDOM.render(Component, div);
		document.body.append(div);
	});
};

Dialog.confirm = options => {
	return new Promise(resolve => {
		const { title, content } = options;
		const div = document.createElement('div');
		const onClose = (action: CloseAction) => {
			ReactDOM.render(<div></div>, div);
			ReactDOM.unmountComponentAtNode(div);
			div.remove();
			resolve(action);
		};
		const Component = <Dialog
			title={title}
			visible={true}
			onClose={() => onClose('cancel')}
			buttons={
				[
					<Button
						onClick={() => onClose('cancel')}
					>取 消</Button>,
					<Button
						style={{marginRight: 0}}
						onClick={() => onClose('confirm')}
						type='primary'
					>确 认</Button>
				]
			}
		>{content}</Dialog>;
		ReactDOM.render(Component, div);
		document.body.append(div);
	});
};

Dialog.prompt = options => {
	return new Promise(resolve => {
		const { title, content } = options;
		let inputValue: undefined;
		const onChange = (event: any) => {
			inputValue = event.target.value;
		};
		const div = document.createElement('div');
		const onClose = (action: CloseAction) => {
			ReactDOM.render(<div></div>, div);
			ReactDOM.unmountComponentAtNode(div);
			div.remove();
			resolve({ action, value: inputValue });
		};
		const Component = <Dialog
			title={title}
			visible={true}
			onClose={() => onClose('cancel')}
			buttons={
				[
					<Button
						onClick={() => onClose('cancel')}
					>取 消</Button>,
					<Button
						onClick={() => onClose('confirm')}
						type='primary'
						style={{marginRight: 0}}
					>确 认</Button>
				]
			}
		>
			<div>{content}</div>
			<input
				style={{width: '96%', height: '28px', marginTop: '20px'}}
				onChange={onChange}
			/>
		</Dialog>;
		ReactDOM.render(Component, div);
		document.body.append(div);
	});
};

Dialog.propTypes = {
	visible: PropTypes.bool.isRequired,
	showClose: PropTypes.bool,
	title: PropTypes.string,
	buttons: PropTypes.arrayOf(PropTypes.element.isRequired),
	onClose: PropTypes.func,
	maskClosable: PropTypes.bool,
	mask: PropTypes.bool
};

Dialog.defaultProps = {
	onClose: () => {},
	showClose: true,
	maskClosable: true,
	mask: true
};

export default Dialog;
