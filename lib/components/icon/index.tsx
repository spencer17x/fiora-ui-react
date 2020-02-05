import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './importIcons';
import './index.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
	type: string;
	className?: string;
	spin?: boolean;
	interval?: number;
}

const buttonPrefixCls: string = 'f-icon';

const Icon: React.FC<IconProps> = props => {
	const {
		type, className, spin, interval,
		...restProps
	} = props;
	const classes = classNames(buttonPrefixCls, className, {
		[`${buttonPrefixCls}-spin`]: spin || Boolean(interval)
	});
	return <svg
		aria-hidden={true}
		className={classes}
		style={{
			animationDuration: `${spin ? interval || 1800 : interval}ms`
		}}
		{...restProps}
	>
		<use xlinkHref={`#${type}`} />
	</svg>;
};

Icon.defaultProps = {
	spin: false,
	interval: 0
};

Icon.propTypes = {
	spin: PropTypes.bool,
	interval: PropTypes.number,
	type: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default Icon;
