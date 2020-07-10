import React, { ReactNode } from 'react';
import { isArray } from '../../utils';
import './index.scss';

export interface MenuProps {
  data: Array<MenuItem>;
}

interface MenuItem {
  title?: string;
  key: string;
  children?: Array<MenuItem>
}

const Menu: React.FC<MenuProps> = props => {
  const { data } = props;
  const renderMenuChildren = (menuArray?: Array<MenuItem>): ReactNode => {
    if (isArray(menuArray)) {
      return menuArray.map(menuItem => {
        return <ul className='f-menu-ul' key={menuItem.key}>
          <div className='f-menu-title'>{menuItem.title}</div>
          {renderMenuChildren(menuItem.children)}
        </ul>;
      });
    }
  };
  return <div className='f-menu'>
    {renderMenuChildren(data)}
  </div>;
};

export default Menu;