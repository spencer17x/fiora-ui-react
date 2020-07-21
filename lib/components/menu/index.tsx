import React, { CSSProperties, useContext } from 'react';
import classNames from 'classnames';
import './index.scss';

interface BaseMenuProps {
  title?: string;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  curKey?: string;
  onClick?: (curKey: string) => void;
}

interface MenuProps extends BaseMenuProps {
  layout?: 'vertical' | 'inline' | 'horizontal';
  selectedKey?: string;
}

interface defaultMenuContext {
  selectedKey?: string;
  onClick?: (curKey: string) => void;
}

const MenuContext = React.createContext<defaultMenuContext>({});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    children, layout, className,
    selectedKey, style, onClick,
  } = props;
  return (
    <div
      style={style}
      className={
        classNames('f-menu', {
          [`f-menu--${layout}`]: layout,
        }, className)
      }
    >
      <MenuContext.Provider
        value={{
          selectedKey,
          onClick,
        }}
      >
        {children}
      </MenuContext.Provider>
    </div>
  );
};

Menu.defaultProps = {
  layout: 'horizontal',
};

export const MenuItem: React.FC<BaseMenuProps> = (props) => {
  const { children, disabled, curKey } = props;
  const context = useContext<defaultMenuContext>(MenuContext);
  console.log(context)
  return (
    <div
      className={classNames('f-menu-item', {
        'f-menu-item--disabled': disabled,
        active: context.selectedKey === curKey,
      })}
      onClick={context.onClick && context.onClick(curKey)}
    >
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
