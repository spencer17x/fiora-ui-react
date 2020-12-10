import React, { useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';

interface MenuItemProps {
  disabled?: boolean;
}

const prefixCls = 'f-menu-item';

const MenuItem: React.FC<MenuItemProps> = props => {
  const { children } = props;
  const { mode } = useContext(MenuContext);
  return <div className={classNames(prefixCls, `${prefixCls}-${mode}`)}>
    {children}
  </div>;
};

export default MenuItem;