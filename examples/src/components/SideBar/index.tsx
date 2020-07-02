import React, { useEffect } from 'react';
import classNames from 'classnames';
import { menuConfig } from '../../config';
import { NavLink, useLocation } from 'react-router-dom';
import './index.scss';

interface SideBarProps {
	className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className }) => {
	const location = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0
		});
	}, [location]);
	return (
		<div className={classNames('example-sidebar', className)}>
			{
				menuConfig.map(menu => {
					const menuRoutePath = `/components/${menu.component.toLocaleLowerCase()}`;
					return (
						<NavLink
							key={menu.component}
							to={menuRoutePath}
							className='example-sidebar_menu-item'
						>
							{menu.title}
						</NavLink>
					);
				})
			}
		</div>
	);
};

export default SideBar;
