import React, { cloneElement, CSSProperties, isValidElement } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import { isArray } from '../../utils';
import './menu.scss';

type MenuMode = 'vertical' | 'horizontal';

export interface MenuProps {
  mode: MenuMode;
  className: string;
  style?: CSSProperties;
}

const prefixCls = 'f-menu';

const Menu: React.FC<MenuProps> = props => {
  const { children, mode, className, ...restProps } = props;
  const childrenAsArray = isArray(children) ? children : [children];
  return <MenuContext.Provider value={{ mode }}>
    <div className={classNames(prefixCls, `${prefixCls}-${mode}`, className)} {...restProps}>
      {
        childrenAsArray.map((child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              key: index,
              level: 1
            });
          }
          return child;
        })
      }
    </div>
  </MenuContext.Provider>;
};

export default Menu;