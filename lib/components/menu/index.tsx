import React, { CSSProperties, useContext } from 'react';
import classNames from 'classnames';
import './index.scss';

interface BaseMenuProps {
  title?: string;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
}

interface MenuProps extends BaseMenuProps {
  layout?: 'vertical' | 'inline' | 'horizontal';
  selectedKey?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface defaultMenuContext {
  selectedKey?: string;
}

const MenuContext = React.createContext<defaultMenuContext>({});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    children, layout, className,
    selectedKey, style,
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
  const { children, disabled } = props;
  const context = useContext<defaultMenuContext>(MenuContext);
  return (
    <div
      className={classNames('f-menu-item', {
        'f-menu-item--disabled': disabled
      })}
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
