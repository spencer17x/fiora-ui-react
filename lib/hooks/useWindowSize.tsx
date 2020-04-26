import React, { useState, useEffect } from 'react';

interface State {
	width: number;
	height: number;
}

const useWindowSize = () => {
	const [size, setSize] = useState<State>({
		width: window.innerWidth,
		height: window.innerHeight
	});
	const handleWindowSize: (this: Window, event: UIEvent) => void = event => {
		const { innerWidth: width, innerHeight: height } = event.target as Window;
		setSize({
			width,
			height
		});
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowSize);
		return () => {
			window.removeEventListener('resize', handleWindowSize);
		};
	}, []);
	return size;
};

export default useWindowSize;
