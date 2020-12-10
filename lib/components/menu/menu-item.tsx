import React, { useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import './menu-item.scss';

interface MenuItemProps {
  disabled?: boolean;
  isDeep?: boolean;
  level?: number;
}

const prefixCls = 'f-menu-item';

const MenuItem: React.FC<MenuItemProps> = props => {
  const { children, isDeep, level = 1 } = props;
  const { mode } = useContext(MenuContext);
  const newLevel = level > 1 ? level - 1 : level;
  return <div
    className={classNames(prefixCls, `${prefixCls}-${mode}`, {
      [`${prefixCls}-${mode}--deep`]: isDeep
    })}
    style={{padding: `10px ${newLevel * 10}px`}}
  >
    {children}
  </div>;
};

export default MenuItem;