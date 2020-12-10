import React, { useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import './menu-item.scss';

interface MenuItemProps {
  disabled?: boolean;
  isBlock?: boolean;
}

const prefixCls = 'f-menu-item';

const MenuItem: React.FC<MenuItemProps> = props => {
  const { children, isBlock } = props;
  const { mode } = useContext(MenuContext);
  return <div
    className={classNames(prefixCls, `${prefixCls}-${mode}`, {
      [`${prefixCls}-${mode}--block`]: isBlock
    })}
  >
    {children}
  </div>;
};

export default MenuItem;