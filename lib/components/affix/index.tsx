import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

interface AffixProps extends React.HTMLAttributes<HTMLDivElement> {
	offsetTop?: number;
	offsetBottom?: number;
}

const prefixCls = 'f-affix';

const Affix: React.FC<AffixProps> = props => {
	const { className, children, offsetTop, style, ...restProps } = props;
	const [lock, setLock] = useState<boolean>(false);
	const affixRef = useRef<HTMLDivElement | null>(null);
	const handleScroll: (event: Event) => void = (event) => {

	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return <div
		ref={affixRef}
		className={classNames(prefixCls, {
			[`${prefixCls}-fixed`]: lock
		}, className)}
		style={{ top: lock ? offsetTop : 'initial', ...style }}
		{...restProps}
	>
		{children}
	</div>;
};

Affix.defaultProps = {
	offsetTop: 0,

};

Affix.propTypes = {
	offsetTop: PropTypes.number,
	offsetBottom: PropTypes.number,
};

export default Affix;
