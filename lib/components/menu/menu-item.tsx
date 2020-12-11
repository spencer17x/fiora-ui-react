import React, { useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import './menu-item.scss';

export interface MenuItemProps {
  disabled?: boolean;
  level?: number;
  key?: string;
  componentKey?: string;
}

const prefixCls = 'f-menu-item';

const MenuItem: React.FC<MenuItemProps> = props => {
  const { children, level = 1, disabled = false, componentKey } = props;
  const { mode } = useContext(MenuContext);
  const newLevel = level > 1 && mode === 'horizontal' ? level - 1 : level;
  return <div
    className={classNames(prefixCls, `${prefixCls}-${mode}`,`${prefixCls}-${mode}--level-${level}`, {
      [`${prefixCls}--disabled`]: disabled
    })}
    style={{padding: `10px ${newLevel * 10}px`}}
  >
    {children}
  </div>;
};

export default MenuItem;