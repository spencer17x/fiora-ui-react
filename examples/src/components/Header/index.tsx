import React from 'react';
import logo from '../../images/logo.jpeg';
import './index.scss';

const Header = ({
	...restProps
}) => {
	return <div className='example-header'>
		<div className='example-header_logo'>
			<img src={logo} className='example-header_logo-image'/>
			<div className='example-header_logo-description'>FIORA-UI OF React</div>
		</div>
		<div className='example-header_search'></div>
		<div className='example-header_menu'></div>
	</div>;
};

export default Header;
