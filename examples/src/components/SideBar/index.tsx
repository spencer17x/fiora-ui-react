import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router';
import { menuConfig } from '../../config';
import './index.scss';

interface SideBarProps {
	className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className }) => {
	const history = useHistory();
	const [currentPath, setPath] = useState('/components/button');
	const location = useLocation();
	useEffect(() => {
		setPath(location.pathname);
	}, [location]);
	return (
		<div className={classNames('example-sidebar', className)}>
			{
				menuConfig.map(menu => {
					const menuRoutePath = `/components/${menu.component.toLocaleLowerCase()}`;
					return (
						<div
							key={menu.component}
							className={classNames('example-sidebar_menu-item', {
								active: menuRoutePath === currentPath
							})}
							onClick={() => history.push(menuRoutePath)}
						>
							{menu.title}
						</div>
					);
				})
			}
		</div>
	);
};

export default SideBar;
