import React from 'react';
import classNames from 'classnames';
import { menuConfig } from '../../config';
import { NavLink } from 'react-router-dom';
import './index.scss';

interface SideBarProps {
	className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className }) => {
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
