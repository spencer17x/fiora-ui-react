import React, { cloneElement, isValidElement, useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import { isArray } from '../../utils';

interface MenuItemGroupProps {
  title: string;
}

const prefixCls = 'f-menu-item-group';

const MenuItemGroup: React.FC<MenuItemGroupProps> = props => {
  const { children, title } = props;
  const { mode } = useContext(MenuContext);
  const childrenAsArray = isArray(children) ? children : [children];
  return <div className={classNames(prefixCls, `${prefixCls}-${mode}`)}>
    <div className={classNames(`${prefixCls}-${mode}--title`)}>{title}</div>
    <div className={classNames(`${prefixCls}-${mode}--children`)}>
      {
        childrenAsArray.map((child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              isBlock: true,
              key: index
            })
          }
          return child;
        })
      }
    </div>
  </div>
}

export default MenuItemGroup;