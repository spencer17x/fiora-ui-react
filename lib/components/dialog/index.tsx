import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { Button } from '../button';
import './index.scss';
import Input from '../input';

type AlertOptions = Omit<DialogProps, 'visible'> & {
	content?: string
}

type CloseAction = 'cancel' | 'confirm'

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

interface RenderDialogToBodyRes {
	action: CloseAction;
	value?: string
}

interface BaseDialogAlert {
	(options: AlertOptions): Promise<RenderDialogToBodyRes>
}

const prefixCls = 'f-dialog';

const Dialog: React.FC<DialogProps> & {
	alert: BaseDialogAlert;
	confirm: BaseDialogAlert;
	prompt: BaseDialogAlert;
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
				appear
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

const renderDialogToBody = (
	options: AlertOptions,
	buttons?: DialogProps['buttons'],
	hasInput?: boolean
): Promise<RenderDialogToBodyRes> => {
	return new Promise(resolve => {
		let inputValue: string;
		const { title, content } = options;
		const div = document.createElement('div');
		const onClose = (action: CloseAction) => {
			const res = hasInput ?
				{ action, value: inputValue } :
				{ action };
			ReactDOM.render(
				React.cloneElement(Component, {
					visible: false
				}), div
			);
			ReactDOM.unmountComponentAtNode(div);
			div.remove();
			resolve(res);
		};
		const Component = <Dialog
			title={title}
			visible={true}
			onClose={() => onClose('cancel')}
			buttons={
				buttons && buttons.map(button => {
					return React.cloneElement(button, {
						onClick: () => {
							const action = button.props.type === 'primary' ? 'confirm' : 'cancel';
							onClose(action);
						}
					});
				})
			}
		>
			{
				hasInput ? <Fragment>
					<div>{content}</div>
					<div>
						<Input
							style={{ width: '100%', height: '28px', marginTop: '20px' }}
							onChange={
								event => {
									inputValue = event.currentTarget.value;
								}
							}
						/>
					</div>
				</Fragment> : content
			}
		</Dialog>;
		ReactDOM.render(Component, div);
		document.body.append(div);
	});
};

Dialog.alert = options => {
	return renderDialogToBody(options, [
		<Button
			type='primary'
			style={{ marginRight: 0 }}
		>确 认</Button>
	]);
};

Dialog.confirm = options => {
	return renderDialogToBody(options, [
		<Button
		>取 消</Button>,
		<Button
			style={{ marginRight: 0 }}
			type='primary'
		>确 认</Button>
	]);
};

Dialog.prompt = options => {
	return renderDialogToBody(options, [
		<Button
		>取 消</Button>,
		<Button
			type='primary'
			style={{ marginRight: 0 }}
		>确 认</Button>
	], true);
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
