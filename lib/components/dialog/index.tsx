import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Icon from '../icon';
import './index.scss';
import { Button } from '../button';

interface DialogProps {
	visible: boolean;
	showClose?: boolean;
	title?: string;
	buttons?: Array<ReactElement>;
	className?: string;
	onClose?: () => void;
	maskClosable?: boolean;
}

type AlertOptions = Omit<DialogProps, 'visible'> & {
	content?: string
}

type CloseAction = 'cancel' | 'confirm'

const prefixCls = 'f-dialog';

const Dialog: React.FC<DialogProps> & {
	alert: (options: AlertOptions) => Promise<CloseAction>
} = props => {
	const {
		children, showClose, visible,
		title, className, buttons,
		onClose, maskClosable,
		...restProps
	} = props;
	return ReactDOM.createPortal(
		<Fragment>
			{
				visible && <div
					className={`${prefixCls}-mask`}
					onClick={() => maskClosable && onClose && onClose()}
				></div>
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
			ReactDOM.render(
				<Dialog
					title={title}
					visible={false}
					onClose={() => onClose('cancel')}
					buttons={[<Button onClick={() => onClose('confirm')} type='primary'>确 认</Button>]}
				>{content}</Dialog>, div
			);
			ReactDOM.unmountComponentAtNode(div);
			div.remove();
			resolve(action);
		};
		const Component = <Dialog
			title={title}
			visible={true}
			onClose={() => onClose('cancel')}
			buttons={[<Button onClick={() => onClose('confirm')} type='primary'>确 认</Button>]}
		>{content}</Dialog>;
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
	maskClosable: PropTypes.bool
};

Dialog.defaultProps = {
	onClose: () => {},
	showClose: true,
	maskClosable: true
};

export default Dialog;
