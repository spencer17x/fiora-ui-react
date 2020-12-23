import React, { cloneElement, CSSProperties, isValidElement } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import './menu.scss';

export type MenuMode = 'vertical' | 'horizontal' | 'inline';

export interface MenuProps {
  mode: MenuMode;
  className?: string;
  style?: CSSProperties;
  activatedKeys?: string[];
  onChange?: (activatedKeys: string[]) => void;
}

const prefixCls = 'f-menu';

const Menu: React.FC<MenuProps> = props => {
  const { children, mode, className, activatedKeys, onChange, ...restProps } = props;
  return <MenuContext.Provider value={{ mode, activatedKeys, onChange }}>
    <div className={classNames(prefixCls, `${prefixCls}-${mode}`, className)} {...restProps}>
      {
        React.Children.map(children, (child, index) => {
          if (
            isValidElement(child)
          ) {
            return cloneElement(child, {
              key: child.key,
              level: 1,
              componentKey: child.key
            });
          }
          return child;
        })
      }
    </div>
  </MenuContext.Provider>;
};

export default Menu;