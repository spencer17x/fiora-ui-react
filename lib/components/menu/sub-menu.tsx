import React, { cloneElement, isValidElement, useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import { isArray } from '../../utils';
import './sub-menu.scss';

interface SubMenuProps {
  title: string;
  level?: number;
}

const prefixCls = 'f-sub-menu';

const SubMenu: React.FC<SubMenuProps> = props => {
  const { children, title, level = 1 } = props;
  const { mode } = useContext(MenuContext);
  const childrenAsArray = isArray(children) ? children : [children];
  const newLevel = level > 1 ? level - 1 : level;
  return <div
    className={
      classNames(
        prefixCls,
        `${prefixCls}-${mode}`,
        `${prefixCls}-${mode}--level-${level}`
      )
    }
  >
    <div
      className={classNames(`${prefixCls}-${mode}--title`)}
      style={{padding: `10px ${newLevel  * 10}px`}}
    >{title}</div>
    <div
      className={
        classNames(
          `${prefixCls}-${mode}--children`
        )
      }
    >
      {
        childrenAsArray.map((child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              isDeep: true,
              key: index,
              level: level + 1
            })
          }
          return child;
        })
      }
    </div>
  </div>;
};

export default SubMenu;