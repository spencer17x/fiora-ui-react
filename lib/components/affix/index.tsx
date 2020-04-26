import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

interface AffixProps extends React.HTMLAttributes<HTMLDivElement> {
	offsetTop?: number;
}

const prefixCls = 'f-affix';

const Affix: React.FC<AffixProps> = props => {
	const { offsetTop, children, className, style, ...restProps } = props;
	const affixRef = useRef<HTMLDivElement | null>(null);
	const [baseStyle, setBaseStyle] = useState<CSSProperties | undefined>(undefined);
	const [lock, setLock] = useState(false);
	const [scrollTopVal, setScrollTopVal] = useState(0);
	const handleScroll: (event: UIEvent) => void = event => {
		const targetEle = event.currentTarget as Window;
		if (!lock && affixRef.current && offsetTop && affixRef.current.getClientRects()[0].top <= offsetTop) {
			setLock(true);
			setScrollTopVal(targetEle.scrollY);
		}
		if (lock && targetEle.scrollY <= scrollTopVal) {
			setLock(false);
		}
	};
	useEffect(() => {
		if (offsetTop && affixRef.current && affixRef.current.getClientRects()[0].top <= offsetTop) {
			setBaseStyle({
				position: 'fixed',
				top: `${offsetTop}px`
			});
		}
	}, [offsetTop]);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lock, scrollTopVal]);
	const lockStyle: CSSProperties | undefined = lock ? { position: 'fixed', top: `${offsetTop}px` } : baseStyle;
	return <div
		ref={affixRef}
		style={{ ...lockStyle, ...style }}
		className={classNames(prefixCls, className)}
		{...restProps}
	>
		{children}
	</div>;
};

Affix.propTypes = {
	offsetTop: PropTypes.number
};

export default Affix;
