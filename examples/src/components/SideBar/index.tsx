import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './index.scss';
import { useHistory, useLocation } from 'react-router';

interface SideBarProps {
	className?: string;
}

interface MenuItem {
	path: string;
	title: string;
}

const SideBar: React.FC<SideBarProps> = ({
	className
}) => {
	const history = useHistory();
	const [menuList] = useState<Array<MenuItem>>([
		{ path: '/components/button', title: 'Button 按钮' },
		{ path: '/components/icon', title: 'Icon 图标' },
		{ path: '/components/grid', title: 'Grid 栅格' },
		{ path: '/components/layout', title: 'Layout 布局' },
		{ path: '/components/affix', title: 'Affix 固钉' },
	]);
	const [path, setPath] = useState('/components/button');
	const location = useLocation();
	useEffect(() => {
		setPath(location.pathname);
	}, [location]);
	return <div className={classNames('example-sidebar', className)}>
		{
			menuList.map((menuItem, menuItemKey) => (
				<div
					key={menuItemKey}
					className={classNames('example-sidebar_menu-item', {
						active: menuItem.path === path
					})}
					onClick={() => history.push(menuItem.path)}
				>{menuItem.title}</div>
			))
		}
	</div>;
};

export default SideBar;
