import React, { useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';

interface MenuItemGroupProps {
  title: string;
}

const prefixCls = 'f-menu-item-group';

const MenuItemGroup: React.FC<MenuItemGroupProps> = props => {
  const { children } = props;
  const { mode } = useContext(MenuContext);
  return <div className={classNames(prefixCls, `${prefixCls}-${mode}`)}>
    {children}
  </div>
}

export default MenuItemGroup;