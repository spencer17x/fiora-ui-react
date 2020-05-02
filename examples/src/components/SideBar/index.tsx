import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router';
import './index.scss';

interface SideBarProps {
	className?: string;
}

interface MenuItem {
	path: string;
	title: string;
}

const SideBar: React.FC<SideBarProps> = ({ className }) => {
	const history = useHistory();
	const [menuList] = useState<Array<MenuItem>>([
		{ path: '/button', title: 'Button 按钮' },
		{ path: '/icon', title: 'Icon 图标' },
		{ path: '/layout', title: 'Layout 布局' },
		{ path: '/grid', title: 'Grid 栅格' },
		{ path: '/breadcrumb', title: 'Breadcrumb 面包屑' },
		{ path: '/affix', title: 'Affix 固钉' },
		{ path: '/steps', title: 'Steps 步骤条' },
	]);
	const [path, setPath] = useState('/components/button');
	const location = useLocation();
	useEffect(() => {
		setPath(location.pathname);
	}, [location]);
	return (
		<div className={classNames('example-sidebar', className)}>
			{menuList.map((menuItem, menuItemKey) => {
				const menuRoutePath = `/components${menuItem.path}`;
				return (
					<div
						key={menuItemKey}
						className={classNames('example-sidebar_menu-item', {
							active: menuRoutePath === path
						})}
						onClick={() => history.push(menuRoutePath)}
					>
						{menuItem.title}
					</div>
				);
			})}
		</div>
	);
};

export default SideBar;
