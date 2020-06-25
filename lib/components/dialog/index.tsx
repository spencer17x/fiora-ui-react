import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import './index.scss';

interface DialogProps {
	visible: boolean;
	showClose?: boolean;
	title?: string;
	buttons?: Array<ReactElement>;
	className?: string;
	onClose?: () => void;
}

const prefixCls = 'f-dialog';

const Dialog: React.FC<DialogProps> = props => {
	const {
		children, showClose, visible,
		title, className, buttons,
		onClose,
		...restProps
	} = props;
	return visible ? ReactDOM.createPortal(
		<Fragment>
			<div className={`${prefixCls}-mask`}></div>
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
		</Fragment>, document.body
	) : null;
};

Dialog.propTypes = {
	visible: PropTypes.bool.isRequired,
	showClose: PropTypes.bool,
	title: PropTypes.string,
	buttons: PropTypes.arrayOf(PropTypes.element.isRequired),
	onClose: PropTypes.func
};

Dialog.defaultProps = {
	onClose: () => {}
};

export default Dialog;
