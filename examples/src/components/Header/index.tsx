import React from 'react';
import logo from '../../images/logo.jpeg';
import GithubLogo from '../GithubLogo';
import './index.scss';

const Header: React.FC = () => {
	return (
		<div className="example-header">
			<div className="example-header_logo">
				<img src={logo} className="example-header_logo-image" />
				<div className="example-header_logo-description">FIORA-UI OF React</div>
			</div>
			<a href="https://github.com/xuzpeng/fiora-ui-react" target="_blank">
				<GithubLogo />
			</a>
		</div>
	);
};

export default Header;
