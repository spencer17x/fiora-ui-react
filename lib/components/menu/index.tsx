import React from 'react';
import classNames from 'classnames';
import './index.scss';

interface BaseMenuProps {
  title?: string;
  disabled?: boolean;
}

const Menu: React.FC<BaseMenuProps> = (props) => {
  const { children } = props;
  return (
    <div className="f-menu">
      {children}
    </div>
  );
};

export const MenuItem: React.FC<BaseMenuProps> = (props) => {
  const { children, disabled } = props;
  return (
    <div className={classNames('f-menu-item', {
      ['f-menu-item--disabled']: disabled
    })}>
      {children}
    </div>
  );
};

export const SubMenu: React.FC<BaseMenuProps> = (props) => {
  const { children, title } = props;
  return (
    <div className="f-sub-menu">
      <div className="f-sub-menu--title">{title}</div>
      <div className="f-sub-menu--content">{children}</div>
    </div>
  );
};

export const MenuItemGroup: React.FC<BaseMenuProps> = (props) => {
  const { children, title } = props;
  return (
    <div className="f-menu-item--group">
      <div className="f-menu-item--group-title">{title}</div>
      <div className="f-menu-item--group-content">{children}</div>
    </div>
  );
};

export default Menu;
